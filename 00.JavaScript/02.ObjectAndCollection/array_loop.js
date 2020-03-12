const array = ['one', 'two', 'three', 'four'];

// 인덱스를 이용한 순회
for(let i = 0 ; i < array.length ; i++) {
   const item = array[i];
   console.log(item)
}

// for-of
for(const item of array) {
   console.log(item);
}


