var value;
try {
	console.log(value.length);
}
catch ( err ) {
	console.log('Error :', err.message);
}
finally {
	console.log('Finally!');
}
