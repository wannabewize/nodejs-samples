export const Subject = 'Node.js';

// 함수
export const add = (i, j) => {
    return i + j;
}

function minus(i, j) {
    return i - j;
}
export {minus};

// 클래스
export class MyClass {
    multiply = (i, j) => {
        return i * j;
    }
}