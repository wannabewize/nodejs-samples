//
// Error 상황 : Event Emitter가 아닌 객체에 이벤트 등록과 발생(emit) 시도
//

class Actor {    
    constructor(name) {
        this.name = name;
    }
}

const johansson = new Actor('Scarlett Johansson');
johansson.on('act', () => {
    console.log('Act Event!');
});
johansson.emit('act');