# 게시판 만들기

## 개요

Javascript 개발자로서 나의 코딩스타일과 기술을 잘 표현할 수 있도록하는 게시판 관리 시스템

## 소스 & 테스트 정보

- BOARD GIT : https://github.com/junki-dev/board
- TESTING URL : http://junki-kim.com/

## 기술 스택

1. Backend
   - Node.js_v16.13(TypeScript)
   - Nest.js_v7(Express)
   - Apollo Server
   - Graphql
2. Frontend
   - HTML, CSS, TypeScript
   - React.js
   - Apollo Client
   - Graphql
3. DevOps
   - MongoDB_v.4.4
   - Docker_v20.10
   - AWS(EC2)
   - Github

## 주요 디렉토리 구조

```bash
└── board
   ├── backend  # Backend 개발 디렉토리
   ├── docker   # Docker 설정, 실행 파일
   └── frontend # Frontend 소스 코드
   └── REAME.me # 리드미 파일
```

## 실행 절차

0. 실행 환경

   - AWS(EC2 \_ t2.medium) - Ubuntu_20.04

1. 필수 소프트웨어 설치

   - Node
   - yarn or npm
   - Docker
   - Docker Compose

2. Git clone

```bash
$ git clone https://github.com/junki-dev/board.git
```

3. 패키지 설치(Frontend/Backend)

```bash
$ cd ./board

# frontend 패키지 설치
$ cd ./frontend
$ yarn install
$ cd ../

# backend 패키지 설치
$ cd ./backend
$ yarn install
$ cd ../
```

4. Frontend 빌드

```bash
$ cd ./frontend

# 수행하고자 하는 stage의 .env* 파일의 REACT_APP_BACKEND_URL(Backend endpoint) 수정
$ vi .env.xxx
# build 명령어 수행
$ yarn build:prod
$ cd ..
```

5. Backend 도커라이징

```bash
$ cd ./backend

# dockerizing
$ docker build -t board:1.0 .
$ cd ..
```

6. Board 서비스 실행

```bash
$ cd docker

# docker-compose.yaml 파일 내, docker image 버전 확인 후 수정
$ vi docker-compose.yaml

# 서비스 실행 명령어 확인
$ ./board.sh -h

# 서비스 실행
$ ./board.sh start
```


## 개선 필요사항

- 테스트 케이스 작성 _ unit, e2e
- Backend 로그 관리 _ daily lotation
- 소스 리펙토링 _ frontend/backend