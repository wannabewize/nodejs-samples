var obj = {
   intVal : 10,
   floatVal : 1.23
};

// Get Access
var val1 = obj.intVal;
var val2 = obj['floatVal'];
console.log(val1);
console.log(val2);

// Set Access
obj.floatVal = 3.14
console.log(obj);

// delete property
delete obj.floatVal;
console.log(obj);

// new property
obj.strVal = 'Hello';
console.log(obj);

// navigate all property
for ( var key in obj ) {
   console.log('key : ' + obj[key]);
}
