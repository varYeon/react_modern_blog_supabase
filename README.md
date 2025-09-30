# Git

Git 설정하고 초기화

1. git init (git 초기화)
2. git config --list (git 환경설정)
   - git config --local user.name "git 계정명"
   - git config --local user.email "git 이메일"
     - 가장 아래에 새로운게 추가 된다면 위에거를 덮어씀
     - 깃 계정을 여러 개 쓸 때 계정 셋팅은 필수 과정
     - global 설정은 조금 경계
3. git add -A 또는 git add .
   - '작업 디렉토리 -> 스테이징 영역' 이동 (올림)
   - git add 파일명 : 일부만 이동도 가능 (vscode 자체 GUI 이용으로도 가능 - 플러스 버튼)
   - 버튼 등을 통해 다시 작업 디렉토리로 오게 함 (내림)
   1. Working Directory(작업 디렉토리)
      - 실제 파일을 수정하는 곳
      - 퍄일은 수정되었지만, git add를 하지 않아서 스테이징 영역에는 없는 상태
   2. Staging Area(스테이징 영역, 인덱스)
      - 커밋(commit)할 변경 사항을 잠시 올려두는 대기 공간
      - git add 명령어로 스테이징 영역에서 파일을 옮길 수 있음
   3. Repository(저장소, .git)
      - 최종적으로 git commit 하면, 스테이징 영역에 있는 파일(폴더)가 git에 기록
      - 커밋 방법 1. git commit 터미널 입력
      - 커밋 방법 2. git commit -m "커밋 메세지"
        - 커밋 메세지 관례
        1. feat: 새로운 기능 추가
        2. fix: 버그 수정
        3. docs: 문서 수정
        4. style: 코드 스타일 변경(추가)
        5. refactor: 리팩토링
        6. test: 테스트 코드 추가
        7. chore: 빌드 설정 변경
        8. git commit -m "feat: 로그아웃 기능 추가"
        - 또는 이모지를 사용 (gitmoji 등 익스텐션 이용, 의미 정해져 있는 이모지)
        - 커밋 방법 3. 내장 GUI의 플러스 버튼
4. git config --global core.editor "code --wait"
   - 설정 취소 : git config --global --unset core.editor
   - commit 메세지 남기는 창 : 터미널 안에 나오게 하기 vs 새 창에 나오게 하기
5. 현재 깃 상태 확인
   1. git status : 현재 저장소에서 파일들의 상태를 보여줌ㄴ
   2. git log : 방금 날린 커밋 히스토리 확인
      git log --oneline 간단히 확인 가능
      git log --graph 그래프로 확인 가능
      git log --graph --oneline 둘 다 사용 가능
6. 커밋 취소
   - '레퍼지토리 -> 워킹 디렉토리 or 스테이징 영역' 이동
   1. 커밋이 한 개 있을 때 : 그냥 git을 다시 초기화 (rm -rf .git -> git init -> git add . -> git commit)
   2. 커밋이 두 개 이상 있을 때
      1. git reset (--mixed) HEAD~숫자 : 숫자 개수 만큼 되돌리겠다
      - git reset HEAD~1 (커밋 1개를 되돌아감)
      - 주의사항: 커밋이 두 개 이상 있어야 작동, 1개일 때 쓰면 오류 발생
        1. --mixed: 기본값, 커밋 취소 + 작업 내역 워킹 디렉토리 영역에 배치
        2. --soft: 커밋 취소 + 작업 내역 스테이징 영역에 배치
        3. --hard: (주의) 커밋 취소 + 작업 내역 삭제 (절대 복구 불가)
   3. 만약에 소스코드가 github에 올라갔으면 reset하면 (**절대**) 안됨
      - 꼬이기도 쉽고 복잡해보여..
      1. git revert 커밋아이디 (log 띄우면 나오는 id) -> 충돌 해결
      2. 가장 많이 하는 실수 -> github 올렸는데 reset 을 하고 push 하는 겨웅 (주의)
      3. 작업 내역 취소한 후 새로운 커밋을 올렸으니 병합해서 사용하세요 -> 팀원 전달
7. github에 소스를 올릴 때
   1. git push -u origin 브랜치명
   2. git push --force
8. git !== github
   - github에 올라가면 git 관리가 더 이상 되지 않음
   - github -> 원격 저장소
   - git -> 로컬 저장소
   - 저장소가 다름
   - github에 올라간 순간부터 git 다루기 어려워짐 (난이도 급상승)
9. 원격 저장소를 등록
   1. git remote add 식별자 원격레포주소
   2. git remote add origin 원격레포주소
   3. git remote add stream 원격레포주소
   - git remote -v 로 등록 여부 확인
10. git push
    1. git push -u 원격레포식별자 브랜치이름
    2. origin -> 원격레포식별자
    3. main -> 규칙
    4. git push -u origin main
       - 쉽게 겪을 수 있는 에러
       1. permission 에러
          1. remote 등록 주소가 잘못되지 않았는지 확인
          2. vscode에 연결된 git 계정과 내가 올리려고 하는 github 계정이 일치하는지 확인
11. git branch
    1. 하나의 저장소 안에서 독립적으로 작업할 수 있는 개발 라인
    2. git checkout -b 브랜치명
    3. git switch -c 브랜치명
    4. 조회 : git branch -v
       1. 기능: feature/기능명
       2. 버그: fix/버그명
       3. 긴급 수정: hotfix/긴급수정명
       4. 문서: docs/문서명
       5. 설정/빌드: chore/설정빌드명
       6. 리팩토링: refactory/리팩토리명
    5. 예시. 로그인 기능
       1. git switch -c feater/social-login
12. main 브랜치에서는 개발 x, 합쳐주는 용도
