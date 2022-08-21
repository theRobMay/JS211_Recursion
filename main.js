// $ Write a recursive JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

const findGCD = (a, b) => {
    if (!b) {
        return a;
    }
    return findGCD(b, a % b);
};
console.log('GCD: ', findGCD(50, 20));

// $ Write a recursive JavaScript program to compute the exponent of any number given.

const findExponent = (num, exp) => {
    if (exp === 0) {
        return 1;
    } else {
        return num * findExponent(num, exp - 1);
    }
};
console.log('Exponent 5^3:',findExponent(5, 3));

// $ Write a recursive JavaScript program to compute the sum of an array of
// $ integers.

const sumArray = (array) => {
    if (array.length === 1) {
        return array[0];
    } else {
        return array.pop() + sumArray(array);
    }
};
console.log('Sum of Array', sumArray([1, 2, 3, 4, 5, 6]));