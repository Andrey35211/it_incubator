// Function 1 - hello world

const greet = () => {
    return "hello world!";
}

// Convert boolean values to strings 'Yes' or 'No'.

let bool = 0;

function boolToWord(bool) {
    if (bool == true) {
        return "Yes"
    } else {
        return "No"
    }
}

// Sentence Smash

let words = ['hello', 'world', 'this', 'is', 'great'];

function smash(words) {
    return words.join(' ')
};

// Reversed sequence

const n = 5;

const reverseSeq = n => {
    const arr = [];


    for (let i = n; i <= n; i--) {
        arr.push(i);
        if (i == 1) {
            break;
        }
    }
    return arr
};

// You Can't Code Under Pressure #1

function doubleInteger(i) {
    i *= 2;
    return i;
}

// Beginner - Reduce but Grow

const x = [1, 2, 3, 4]

function grow(x) {
    const arr = x.reduce((x, arr) => x * arr);
    return arr
}

// Returning Strings

let name = "Andrey";

function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((acc, number) => acc + number, 0);
    const length = classPoints.length;
    const average = sum / length;
    if (yourPoints > average) {
        return true
    } else {
        return false
    }
};

// A Needle in the Haystack

function findNeedle(haystack) {
    return "found the needle at position " + haystack.findIndex(i => i == "needle")
}

// Convert a string to an array

function stringToArray(string) {
    return string.split(' ');
}

// Convert a Number to a String!

function numberToString(num) {
    return String(num)
}

// Counting sheep...

function countSheeps(arrayOfSheep) {
    arr = arrayOfSheep.filter(el => el === true);
    return arr.length
}

// Categorize New Member

// Jenny's secret message

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

// Array plus array

function arrayPlusArray(arr1, arr2) {

    const add1 = arr1 => arr1.reduce((a, b) => a + b, 0);
    const add2 = arr2 => arr2.reduce((a, b) => a + b, 0);

    let count1 = add1(arr1);
    let count2 = add2(arr2);
    let sum = count1 + count2

    return sum
}

// Convert a Boolean to a String

function booleanToString(b) {
    return String(b)
}

// Enumerable Magic #20 - Cascading Subsets

function eachCons(array, n) {
    const r = []
    for (let i = 0; i <= array.length - n; i++) {
        const chunk = []
        for (let j = i; j < i + n; j++) {
            chunk.push(array[j])
        }
        r.push(chunk)
    }

    return r;
}

// What is between?

function between(a, b) {
    const arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

// Freudian translator

function toFreud(string) {
    return !string ? '' : string.split(' ').map(el => "sex").join(' ')
}

// Volume of a Cuboid

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

// How much water do I need?

function howMuchWater(water, load, clothes) {
    if (clothes > load * 2) return 'Too much clothes';
    else if (load > clothes) return 'Not enough clothes';
    else return +(water * 1.1 ** (clothes - load)).toFixed(2)
}

// Remove duplicates from list

function distinct(a) {
    const uniqueNumbers = new Set(a)
    return Array.from(uniqueNumbers)
}

// Type of sum

function typeOfSum(a, b) {
    return typeof (a + b)
}

// Count Odd Numbers below n

function oddCount(n) {
    return Math.floor(n / 2)
}

// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

// Get the mean of an array

function getAverage(marks) {
    return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}

// Student's Final Grade

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else {
        return 0
    }
}

// Convert to Binary

function toBinary(n) {
    return Number(n.toString(2));
}

// Sleigh Authentication

function Sleigh() {
}

Sleigh.prototype.authenticate = function (name, password) {
    return name === 'Santa Claus' && password === 'Ho Ho Ho!'
};

// Convert number to reversed array of digits

function digitize(n) {
    return n.toString().split('').reverse().map(el => Number(el))
}

// Difference of Volumes of Cuboids

function findDifference(a, b) {
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}

// Grasshopper - Personalized Message

function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}

// Multiplication table for number

function multiTable(number) {
    let res = '';
    for (let i = 1; i <= 10; i++) {
        res += `${i} * ${number} = ${i * number}`
        if (i < 10) {
            res += '\n'
        }
    }
    return res
}

// Sum of differences in array

function sumOfDifferences(arr) {
    const sorted = arr.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 1; i < sorted.length; i++) {
        sum += sorted[i - 1] - sorted[i]
    }
    return sum
}

// Enumerable Magic #2 - True for Any?

function any(arr, fun){
    return arr.some(fun)
}

// Total amount of points

function points(games) {
    let count = 0;
    games.forEach ( item => {
        if(item[0] > item[2]) {
            count += 3
        } else if(item[0] == item[2]) {
            count += 1
        }
    })
    return count
}

// Find out whether the shape is a cube

var cubeChecker = function(volume, side){
    if(volume <= 0 || side<= 0){
        return false
    }
    return Math.cbrt(volume) === side;
};

// Will there be enough space?

function enough(cap, on, wait) {
    const p = on + wait - cap;
    return p < 0 ? 0 : p
}

// For Twins: 1. Types

