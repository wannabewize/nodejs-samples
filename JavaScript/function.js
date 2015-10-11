function add(i, j) {
	return i + j;
}

console.log('1 + 2 = ', add(1, 2));

var minus = function(i, j) {
	return i - j;
}

console.log('2 - 1 = ', minus(2, 1));

function circle(radius) {
    var pi = 3.14;
    function area(r) {
        return r * r * pi;
    }
    return area(radius);
}

var ret = circle(3)
console.log('circle(3) = ', ret);

// Error
undefinedFunction();