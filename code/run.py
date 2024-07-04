import os
import time
import shutil
import subprocess
from datetime import datetime



# Git 사용자 설정
subprocess.run(['git', 'config', '--global', 'user.email', '[you@example.com]'])
subprocess.run(['git', 'config', '--global', 'user.name', '[Your Name]'])

# GitHub 저장소 클론
repository_url = 'https://[Personal Access Token]@github.com/[Your Name]/[RepositoryName].git'
repository_dir = 'C:/abcd/efgh'     # 'GitHub 저장소 클론' 외부 다른 폴더에서 이미지 파일 생성한 뒤 커밋해야함

if not os.path.exists(repository_dir):
    subprocess.run(['git', 'clone', repository_url, repository_dir])



def run():
    # subprocess.run(['python', 'clutchswing_gold.py'])
    # subprocess.run(['python', 'clutchswing_btc.py'])
    # subprocess.run(['python', 'clutchswing_eth.py'])
    subprocess.run(['python', 'C:/abcd/clutchswing_gold.py'])
    subprocess.run(['python', 'C:/abcd/clutchswing_btc.py'])
    subprocess.run(['python', 'C:/abcd/clutchswing_eth.py'])
    upload_to_github()



def upload_to_github():
    img_base_dir = 'C:/abcd/img'
    sub_dirs = ['gold', 'btc', 'eth']

    os.chdir(repository_dir)

    # 최신 변경 사항을 가져옴
    subprocess.run(['git', 'pull', 'origin', 'main'])

    for sub_dir in sub_dirs:
        src_dir = os.path.join(img_base_dir, sub_dir)
        dest_dir = os.path.join(repository_dir, 'img', sub_dir)

        if os.path.exists(src_dir):
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir)

            # src_dir의 모든 파일을 dest_dir로 복사 - img 폴더
            for filename in os.listdir(src_dir):
                if filename.endswith('.png'):
                    shutil.copy(os.path.join(src_dir, filename), os.path.join(dest_dir, filename))

            # 복사된 파일을 git add
            result = subprocess.run(['git', 'add', os.path.join('img', sub_dir, '*.png')], capture_output=True, text=True)
            if result.returncode != 0:
                print(f"Error adding files in {src_dir}: {result.stderr}")

    # 커밋 메시지와 함께 커밋
    commit_result = subprocess.run(['git', 'commit', '-m', 'Upload new images'], capture_output=True, text=True)
    if commit_result.returncode != 0:
        print(f"Error committing changes: {commit_result.stderr}")
    
    # 변경 사항 푸시
    push_result = subprocess.run(['git', 'push', 'origin', 'main'], capture_output=True, text=True)
    if push_result.returncode != 0:
        print(f"Error pushing changes: {push_result.stderr}")



run()                                                                                       # 코드 실행시, 1회 실행
print()
print("최초 실행 완료")
print("대기중")

while True:
    now = datetime.now()
    
    if (now.hour == 9 and now.minute >= 0) and (now.hour == 9 and now.minute <= 10):        # 09:00 ~ 09:10 사이에 실행
        start_time = time.time()                                                            # 시작 시간 기록
        run()                                                                               # 1차 실행 (약 45초 소요)
        end_time = time.time()                                                              # 종료 시간 기록
        execution_time = end_time - start_time                                              # 실행 시간 계산
        print()
        print(f"코드 실행 시간: {execution_time} 초")
        print("1차 실행 완료")
        print()

        time.sleep(120)                                                                      # 2분간 대기

        start_time = time.time()                                                            # 시작 시간 기록
        run()                                                                               # 2차 실행 (약 45초 소요)
        end_time = time.time()                                                              # 종료 시간 기록
        execution_time = end_time - start_time                                              # 실행 시간 계산
        print()
        print(f"코드 실행 시간: {execution_time} 초")
        print("2차 실행 완료")
        print()

        print("대기중")
        time.sleep(23.8 * 60 * 60)                                                          # 23시 48분간 대기

    else:
        time.sleep(2)                                                                       # 23시 48분간 대기 이후 부터는 2초 간격으로 체크


