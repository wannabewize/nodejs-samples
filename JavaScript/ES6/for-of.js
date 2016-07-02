var array = [1, 2, '1', '2', {one:1}, {two:2}, [1, 2]];

var index = 0;
for(var item of array) {
   console.log(index++, item, typeof item);
}

var obj = {
   name : 'IU',
   job : 'Singer',
   age : 20
}

for(var prop in obj) {
   console.log('prop : ', prop, ' value : ', obj[prop]);
}
