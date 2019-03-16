const buf1 = Buffer.from('Hello World');
console.log(buf1.toString(), buf1);

for (const item of buf1) {
    console.log(item);
}

const item = buf1[3];
console.log('buf1[3] :', item);
console.log('buf1[3].toString :', String.fromCharCode(item));

const buf2 = Buffer.from('한글');
console.log(buf2.toString(), buf2);

for (const item of buf2) {
    console.log(item);
}