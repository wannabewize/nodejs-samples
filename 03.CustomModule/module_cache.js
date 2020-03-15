const coder = require('./object_module');
coder.code();
coder.code();

// 모듈은 캐쉬되므로, 객체 형태의 모듈은 공유된다.
const coder2 = require('./object_module');
coder2.code();