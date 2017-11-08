exports.add = function(...params) {
    let l = args.length, args = params, i = 0, sum = 0;
    
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};