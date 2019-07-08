const sum = (value) => {
    let incr = 0;
    const nestedSum = (nextValue) => {
        if(nextValue === undefined) {
            return incr;
        };
        incr += nextValue;
        return nestedSum;
    };
    return nestedSum(value)
}

console.log( sum(1)(2)(4)(2)(4)(2)(4)());