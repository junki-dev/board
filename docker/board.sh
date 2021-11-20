#!/bin/bash
#*****************************************#
# 파일명 : board.sh 
# 작성자 : jkKim
#*****************************************#

# import
## 로그 형식 및 HELP 메시지
. scripts/help.sh

# Global Variable
## default docker-compose file
COMPOSE_FILE="docker-compose.yaml"
## docker service
SERVICES="board"

# 시스템 구동
function systemStart() {

  # Docker compose 구동
  docker-compose -f $COMPOSE_FILE up -d $SERVICES
  sleep 2

  # 시스템 구동 확인
  docker ps -a

  infoln
  infoln "Started Board Syetem"
  infoln
}

function systemDown() {

  # Docker compose 중지 및 삭제
  docker-compose -f $COMPOSE_FILE down --volumes --remove-orphans
  sleep 2

  infoln
  infoln "Stoped Board Syetem"
  infoln
}

# Parse commandline args
## Parse mode
command=""

if [[ $# -lt 1 ]] ; then
  printHelp $command
  exit 0
else
  command=$1
  shift
fi

# parse flags
while [[ $# -ge 1 ]] ; do
  key="$1"
  case $key in
  -h )
    printHelp $command
    exit 0
    ;;
  -db )
    SERVICES="board_mongodb"
    ;;
  -node )
    SERVICES="board"
    ;;
  * )
    errorln "Unknown flag: $key"
    printHelp $command
    exit 1
    ;;
  esac
  shift
done

# 실행 명령어 구분
if [ "${command}" == "start" ]; then
  infoln "Starting Board System"
  systemStart
elif [ "${command}" == "down" ]; then
  infoln "Stopping Board System"
  systemDown
else
  printHelp $command
  exit 1
fi
