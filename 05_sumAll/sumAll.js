const sumAll = function (numStart, numEnd) {
    let sum = 0;
    if (typeof(numStart)!="number" || typeof(numEnd)!="number") {
        return 'ERROR';
    }
    if (Math.floor(numStart) != numStart || Math.floor(numEnd) != numEnd) {
        return 'ERROR';
    }
    if (numStart<0 || numEnd<0) {
        return 'ERROR';
    }
    if (numStart < numEnd)
        for (let i = numStart; i <= numEnd; i++) {
            sum += i;
        }
    else
        for (let i = numStart; i >= numEnd; i--) {
            sum += i;
        }
    return sum
};
console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));
// Do not edit below this line
module.exports = sumAll;
