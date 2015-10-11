function add(i, j, handler) {
	var ret = i + j;
	handler(ret);
}

add(1, 2, function(val) {
	console.log('1 + 2 = ' + val);
});


function showConsole(ret) {
   console.log('Result = ', ret);
}

add(1, 2, showConsole);
