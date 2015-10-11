console.log('var x;');
var x;

if ( x ) {
	console.log('if (x)');
}

if ( x == undefined ) {
	console.log('if ( x == undefined )');
}

if ( x == 'undefined' ) {
	console.log('if x == "undefined" )');
}

if ( x === undefined ) {
	console.log('if ( x === undefined )');
}

if ( x == null ) {
   console.log('if ( x == null )');
}


console.log('var y = null;');
var y = null;

if ( !y ) {
	console.log('if ( !y )');
}

if ( y == null ) {
   console.log('if ( y == null )');
}

if ( y == undefined ) {
   console.log('if ( y == undeinfed )');
}