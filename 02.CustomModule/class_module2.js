//
// Class 문법을 이용한 모듈 작성
//
class Singer {
    constructor(name) {
        this.name = name;
    }
    sing() {
        console.log('sing sing');
    }
}

Singer.prototype.dance = function() {
    console.log('dance dance');
}

// 단일 클래스로 exports. 이때는 module 생략 불가능
module.exports = Singer;