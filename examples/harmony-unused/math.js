export function add(...params) {
	var sum = 0, i = 0, args = params, l = args.length;
	while (i < l) {
		sum += args[i++];
	}
	return sum;
}

export function multiply(...params) {
	var product = 1, i = 0, args = params, l = args.length;
	while (i < l) {
		product *= args[i++];
	}
	return product;
}

export function list(...params) {
	return Array.from(params);
}
