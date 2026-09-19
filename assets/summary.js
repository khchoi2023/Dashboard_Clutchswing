/* This public CSV contract contains only numeric results and ISO dates. */
(() => {
    const fields = 'years,start_date,end_date,strategy_return,hold_return,difference_pp';
    function parseSummary(text) {
        const lines = text.trim().split(/\r?\n/);
        if (lines.shift() !== fields || lines.length !== 5) throw new Error('Invalid summary');
        const years = [1, 3, 5, 7, 9];
        const rows = lines.map((line, index) => {
            const values = line.split(',');
            if (values.length !== 6 || values.some(v => v.trim() === '')) throw new Error('Invalid row');
            const [year, start, end, trade, hold, diff] = values;
            const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) &&
                Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
            if (+year !== years[index] || !validDate(start) || !validDate(end) || start >= end ||
                ![trade, hold, diff].every(v => Number.isFinite(Number(v))) ||
                Math.abs(Number(trade) - Number(hold) - Number(diff)) > 1e-7) throw new Error('Invalid values');
            return {year: +year, start, end, trade: +trade, hold: +hold, diff: +diff};
        });
        if (new Set(rows.map(row => row.end)).size !== 1) throw new Error('Dates disagree');
        return rows;
    }

    async function loadSummary(section) {
        const body = section.querySelector('tbody');
        const status = section.querySelector('[data-summary-status]');
        const date = section.querySelector('[data-summary-date]');
        const number = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: 'always'
        });
        try {
            const response = await fetch(section.dataset.summarySrc, {cache: 'no-cache'});
            if (!response.ok) throw new Error('Summary unavailable');
            const rows = parseSummary(await response.text());
            const fragment = document.createDocumentFragment();
            for (const row of rows) {
                const tr = document.createElement('tr');
                const values = [`${row.year} year${row.year === 1 ? '' : 's'}`,
                    `${row.start} – ${row.end}`, `${number.format(row.trade)}%`,
                    `${number.format(row.hold)}%`, `${number.format(row.diff)} pp`];
                values.forEach((value, index) => {
                    const cell = document.createElement(index === 0 ? 'th' : 'td');
                    if (index === 0) cell.scope = 'row';
                    cell.style.cssText = `padding: 14px 18px; border-bottom: 1px solid #ddd; text-align: ${index < 2 ? 'left' : 'right'};`;
                    cell.textContent = value;
                    tr.append(cell);
                });
                fragment.append(tr);
            }
            body.replaceChildren(fragment);
            date.dateTime = rows[0].end;
            date.textContent = new Intl.DateTimeFormat('en-US', {
                year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
            }).format(new Date(rows[0].end));
            status.textContent = '';
        } catch (error) {
            body.replaceChildren();
            date.removeAttribute('datetime');
            date.textContent = 'unavailable';
            status.textContent = 'Return data could not be loaded. Please reload the page to try again.';
        } finally {
            section.removeAttribute('aria-busy');
        }
    }
    document.querySelectorAll('[data-summary-src]').forEach(loadSummary);
})();
