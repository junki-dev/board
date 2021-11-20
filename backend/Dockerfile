# build 명령어 예시
## docker build . -t board:1.0

# base 이미지 설정
FROM node:16.13.0

# 앱 디렉터리 생성
WORKDIR /usr/src

# 앱 의존성 설치
COPY package.json .
COPY . .

# page 설치
RUN yarn install

# build
RUN yarn build