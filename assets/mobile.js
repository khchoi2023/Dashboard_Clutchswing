(() => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.getElementById('site-menu');
    const mobile = matchMedia('(max-width: 767px)');
    function closeMenu(restoreFocus = false) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        if (restoreFocus) toggle.focus();
    }
    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Close menu' : 'Menu';
    });
    document.addEventListener('click', event => {
        if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true);
    });
    mobile.addEventListener('change', () => closeMenu());

    const charts = document.querySelectorAll('.chart-row img');
    if (!charts.length) return;
    const viewer = document.createElement('dialog');
    viewer.className = 'chart-viewer';
    viewer.setAttribute('aria-label', 'Enlarged chart');
    viewer.innerHTML = '<div class="chart-viewer-toolbar"><button type="button" data-close>Close</button><button type="button" data-zoom aria-pressed="false">Original size</button><a target="_blank" rel="noopener">Open image</a></div><div class="chart-viewer-scroll"><img alt=""></div>';
    document.body.append(viewer);
    const image = viewer.querySelector('img');
    const scroll = viewer.querySelector('.chart-viewer-scroll');
    const zoom = viewer.querySelector('[data-zoom]');
    const close = viewer.querySelector('[data-close]');
    let opener;
    close.addEventListener('click', () => viewer.close());
    viewer.addEventListener('close', () => opener?.focus({preventScroll: true}));
    zoom.addEventListener('click', () => {
        const enlarged = scroll.classList.toggle('is-zoomed');
        zoom.setAttribute('aria-pressed', String(enlarged));
        zoom.textContent = enlarged ? 'Fit to screen' : 'Original size';
    });
    for (const chart of charts) {
        chart.tabIndex = 0;
        chart.setAttribute('role', 'button');
        chart.setAttribute('aria-label', `Enlarge: ${chart.alt}`);
        function open() {
            opener = chart;
            image.src = chart.src;
            image.alt = chart.alt;
            viewer.querySelector('a').href = chart.src;
            scroll.classList.remove('is-zoomed');
            zoom.setAttribute('aria-pressed', 'false');
            zoom.textContent = 'Original size';
            viewer.showModal();
            scroll.scrollTo(0, 0);
            close.focus();
        }
        chart.addEventListener('click', open);
        chart.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
        });
    }
})();
