/*
 * 커스텀 콘솔. 파일로 로그와 에러 기록하기
 */

const fs = require('fs');
const Console = require('console').Console;

const errorFile = fs.createWriteStream('./err.log');
const logger = new Console(process.stdout, errorFile);

// 콘솔에 로그 출력
logger.info('info','정보 메세지');
logger.log('log','로그 메세지');

// err.log 파일에 경고, 에러 메세지 출력
logger.warn('warn', '경고 메세지');
logger.error('error', '에러 메세지');
