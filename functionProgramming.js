//         0  1  2  3  4  5  6  7  8  9
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

// sum of all odd nums
const sumOfAllOddNums = arr.reduce((acc, cur) => {
    let total = acc;
    if (cur%2 !== 0) {
        total = acc + cur    
    }
    return total;
}, 0);
console.log(sumOfAllOddNums);

function someOfAllOddNums(arr) {
    return arr.reduce((acc, num) => {
        let total = acc
        if (num%2 !== 0) {
            return num + acc
        }
        return total;
    }, 0)
};

console.log(someOfAllOddNums(arr));

// sum of all odd indices
const sumOfAllOddIndices = arr.reduce((acc, cur, ind) => {
    let total = acc;
    if (ind%2 !== 0) {
        total = acc + cur
    };
    return total
}, 0);

console.log(sumOfAllOddIndices);

// biggest number in the array
const biggestNum = arr.reduce((acc, cur) => {
    let max = 1;
    cur > max ? max = cur : max
    return max
}, 0);
console.log(biggestNum);

// number divisible by 10
const numDivByTen = arr.filter(n => n % 10 === 0)
console.log(numDivByTen);

// inc odd nums and dec even nums

//         0  1  2  3  4  5  6  7  8  9
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const incDec = arr.reduce((acc, cur) => {
    if(cur%2 === 0) {
        return [...acc, cur-=1];
    } else {
        return [...acc, cur+=1];
    };

}, []);

console.log(incDec);

// sum of all odd and even nums separately
const reducer = (acc, cur) => {
    if (cur%2 === 0) {
        return {...acc, evenSum: acc.evenSum + cur}
    } else {
        return {...acc, oddSum: acc.oddSum + cur}
    }       
};

const oddEvenNums = arr.reduce(reducer, {
    evenSum: 0,
    oddSum: 0
});

console.log(oddEvenNums);

const str = ["apple", "oranges", "mango", "papaya", 'z'];

let sameChar = str.reduce((acc, cur) => {
    return {...acc, [cur.length] : (acc[cur.length] || 0) + 1}; 
}, {});

console.log(sameChar);


// return an arr with strings which have vowels
let strWithVowels = str.filter(item => {
    let vowels = ["a", "e", "i", "o", "u"]
    
    return vowels.some(vowel => item.includes(vowel))

});

console.log(strWithVowels);

// return an arr of obj with key as items and value as number of char in string
const objKeyValue = str.reduce((acc, cur) => {
    console.log(cur);
    let length = cur.length;
    console.log(length);
    return {...acc, [cur]: length}
}, {});

const arrObjKeyValue = str.map(item => {
    return {[item]: item.length};
});

console.log(objKeyValue);
console.log(arrObjKeyValue);


// The One
const compose = (...args) => {
    return (num) => args.reduce((acc, cur) => cur(acc), num);
}

const increment = (n) => n + 1;
const square = (n) => n * n;

const incrementThenSqaure = compose(increment, square);
console.log(incrementThenSqaure(2));