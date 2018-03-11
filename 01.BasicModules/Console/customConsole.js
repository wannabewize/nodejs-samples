/*
 * 커스텀 콘솔. 파일로 로그와 에러 기록하기
 */

var fs = require('fs');
var Console = require('console').Console;

var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');
var logger = new Console(output, errorOutput);

// stdout.log 파일로 로그 출력
logger.info('info','정보 메세지');
logger.log('log','로그 메세지');

// stderr.log 파일로 경과, 에러 메세지 출력
logger.warn('warn', '경고 메세지');
logger.error('error', '에러 메세지');
