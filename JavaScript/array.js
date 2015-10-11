var cars = ['Mercedes', 'Volvo', 'BMW'];

cars.push('poli');
// [ 'Mercedes', 'Volvo', 'BMW', 'Poli' ]
console.log(cars);

cars[4] =  'Hyundai';
// [ 'Mercedes', 'Volvo', 'BMW', 'Poli', 'Hyundai' ]
console.log(cars);

cars.splice(3,1);
// [ 'Mercedes', 'Volvo', 'BMW', 'Hyundai' ]
console.log(cars);

cars.pop();                    
// [ 'Mercedes', 'Volvo', 'BMW' ]
console.log(cars);

cars[1] = 'Porche';
// [ 'Mercedes', 'Porche', 'BMW' ]
console.log(cars);

cars.sort();
// [ 'BMW', 'Mercedes', 'Porche' ]
console.log(cars);

cars.sort(function(a, b) {
   return a.length < b.length;
});
// [ 'Mercedes', 'Porche', 'BMW' ]
console.log(cars);

var cars2 = cars.concat(['Audi', 'Toyota']);
// [ 'Mercedes', 'Porche', 'BMW', 'Audi', 'Toyota' ]
console.log(cars2);

var germanCars = cars2.slice(0,4);
// [ 'Mercedes', 'Porche', 'BMW', 'Audi' ]
console.log(germanCars);

cars2.splice(3, 2);
// [ 'Mercedes', 'Porche', 'BMW' ]
console.log(cars2);

