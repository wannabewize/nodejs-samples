//
// 유니코드와 버퍼
const apple = '';
const appleBuf = Buffer.from(apple);

console.log('apple emoji :', apple);
console.log('apple buffer :', appleBuf);
console.log('length : ', appleBuf.length);

// 📭. 4바이트 문자
const mailboxBuffer = Buffer.from([0xf0, 0x9f, 0x93, 0xad]);
const mailbox = mailboxBuffer.toString();

console.log('mailbox emoji :', mailbox);
console.log('mailbox buffer :', mailboxBuffer);
console.log('length :', mailboxBuffer.length);
