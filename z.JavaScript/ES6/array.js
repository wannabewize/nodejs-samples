const array1 = [ 1, 'one', {kor:'일'} ];
console.log(array1);

const int8Arry = new Int8Array(10);
int8Arry[1] = 1;
int8Arry[2] = 127;
int8Arry[3] = 128;
int8Arry[4] = 1337; // 57
int8Arry[5] = 'a'; // wrong type
console.log('Int8Array : ', int8Arry);

const uint8Array = new Uint8Array(10);
uint8Array[1] = 1;
uint8Array[2] = 255;
uint8Array[3] = -1;
console.log('UInt8Array : ', uint8Array);

var uint8CArray = new Uint8ClampedArray(10);
uint8CArray[0] = 42;
uint8CArray[1] = 1337; // 255
uint8CArray[2] = 'a';
console.log('ClampedArray : ', uint8CArray);

const int16Array = new Int16Array(10);
int16Array[1] = 1;
int16Array[2] = 255;
int16Array[3] = Math.pow(2,15)-1;
int16Array[4] = Math.pow(2,15);

console.log('Int16Array : ', int16Array);

