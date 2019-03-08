const os = require('os');

console.log('tmpdir : ', os.tmpdir());
console.log('homedir : ', os.homedir());
// 'BE' for big endian or 'LE' for little endian.
console.log('endian : ', os.endianness());
console.log('hostname : ', os.hostname());

console.log('type : ', os.type());
console.log('platform : ', os.platform());
console.log('arch : ', os.arch());
console.log('release : ', os.release());

console.log('uptime : ', os.uptime());
console.log('loadavg : ', os.loadavg());

console.log('totalmem : ', os.totalmem());
console.log('freemem : ', os.freemem());

console.log('cpus : ', os.cpus());
console.log('network interfaces : ', os.networkInterfaces());
console.log('eol : ', os.EOL);