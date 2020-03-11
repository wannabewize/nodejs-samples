/** 
 * 클래스 문법
*/

// 클래스 정의
class Person {
    // constructor는 1개만
    constructor(name) {
        // 프로퍼티 선언
        this.name = name;
    }

    // 메소드
    sayHello() {
        console.log('Hello. I am ' + this.name);
    }
}

// 클래스에서 객체 생성
const iu = new Person('IU');
iu.sayHello();


// 클래스 상속
class Actor extends Person {
    constructor(name, movie) {
        super(name);
        this.movie = movie;
    }
}

const johansson = new Actor('Johansson', 'Avengers');
johansson.sayHello();