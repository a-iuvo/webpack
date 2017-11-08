exports.add = function(...params) {
    var sum = 0, i = 0, args = params, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};