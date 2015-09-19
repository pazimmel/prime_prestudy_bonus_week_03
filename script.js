function functionA(x) {
	return x-1;
}
function functionB(x) {
	return 3*x;
}
function functionC(x) {
	return Math.pow(2,x)
}

var number = functionA(functionB(functionC(-1)));
document.write(number);