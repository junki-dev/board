#!/bin/bash
#**********************************#
# 파일명 : help.sh
# 작성자 : jkKim
#
# Log 형식 / Help 메시지 출력
#**********************************#

C_RESET='\033[0m'
C_RED='\033[0;31m'
C_GREEN='\033[0;32m'
C_BLUE='\033[0;34m'
C_YELLOW='\033[1;33m'

# HelpMessage 출력
function printHelp() {
  USAGE="$1"
  if [ "$USAGE" == "up" ]; then
    println "Usage: "
    println "  \033[0;32mboard.sh\033[0m start [Flags]"
    println
    println "  Starting Board system..."
    println
    println "    Flags:"
    println "    -db   Star mongodb docker service"
    println "    -node Start meidum explorer service(depends on mongodb)"
    println    
    println " Possible Command and flag combinations"
    println "   \033[0;32m./board.sh\033[0m start"
    println "   \033[0;32m./board.sh\033[0m start -db"
    println "   \033[0;32m./board.sh\033[0m start -node"
  elif [ "$USAGE" == "down" ]; then
    println "Usage: "
    println "  \033[0;32mboard.sh\033[0m down"
    println
    println "  Stop Board system..."
    println
    println " Possible Command"
    println "   \033[0;32mmboard.sh\033[0m down"
  else
    println "Usage: "
    println "  \033[0;32mmboard.sh\033[0m COMMAND [Flags]"
    println
    println "  Operate Board system..."
    println
    println "    COMMAND:"
    println "    start   Start Board system."
    println "    down    Down Board system."
    println
    println "    Flags:"
    println "    -h        Print this message"
    println
    println " Possible Command"
    println "   \033[0;32m./board.sh\033[0m start"
    println "   \033[0;32m./board.sh\033[0m start -db"
    println "   \033[0;32m./board.sh\033[0m start -node"
    println "   \033[0;32mmboard.sh\033[0m down"
  fi
}

# println echos string
function println() {
  echo -e "$1"
}

# errorln echos i red color
function errorln() {
  println "${C_RED}${1}${C_RESET}"
}

# successln echos in green color
function successln() {
  println "${C_GREEN}${1}${C_RESET}"
}

# infoln echos in blue color
function infoln() {
  println "${C_BLUE}${1}${C_RESET}"
}

# warnln echos in yellow color
function warnln() {
  println "${C_YELLOW}${1}${C_RESET}"
}

# fatalln echos in red color and exits with fail status
function fatalln() {
  errorln "$1"
  exit 1
}

export -f errorln
export -f successln
export -f infoln
export -f warnln
