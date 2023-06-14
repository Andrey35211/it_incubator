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

function typeValidation(variable, type){
    return typeof(variable) === type
}

// Beginner Series #1 School Paperwork

function paperwork(n, m) {
    if(n<0 || m < 0) return 0
    return n * m
}

// isReallyNaN

const isReallyNaN = (val) => {
    return Number.isNaN(val)
};

// Sum The Strings

function sumStr(a,b) {
    return (Number(a) + Number(b)).toString()
}

// Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
    return arr.slice(0,  n)
}

// Is he gonna survive?

function hero(bullets, dragons){
    return dragons * 2 <= bullets;
}

// Convert a String to a Number!

const stringToNumber = function(str){
    return Number(str);
}

// Find Maximum and Minimum Values of a List

const min = function(list){

    return Math.min(...list);
}
const max = function(list){

    return Math.max(...list);
}

// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
    return array.map(el => {
        if(Number.isInteger(Math.sqrt(el))) {
            return Math.sqrt(el)
        } else {
            return el ** 2;
        };
    });
}

// Sum without highest and lowest number

function sumArray(array) {
    if(!array || array.length < 2) return 0;
    let min = array[0];
    let max = array[0];
    let sum = 0;
    array.forEach(el => {
        if(el < min) min = el;
        if(el > max) max = el;
        sum += el
    })
    return sum - min - max
}

// Rock Paper Scissors!

const rps = (p1, p2) => {
    const getMsg = (n) => `Player ${n} won!`;

    if(p1 === "scissors" && p2 === "paper") return getMsg(1);
    if(p1 === "paper" && p2 === "scissors") return getMsg(2);

    if(p1 === "paper" && p2 === 'rock') return getMsg(1);
    if(p1 === 'rock' && p2 === "paper") return getMsg(2);

    if(p1 === 'rock' && p2 === "scissors") return getMsg(1);
    if(p1 === "scissors" && p2 === 'rock') return getMsg(2);

    if(p1 === p2) return "Draw!"
};

// Keep Hydrated!

function litres(time) {
    return Math.floor(time * 0.5);
}

// Is the string uppercase?

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
}

// Count by X

function countBy(x, n) {
    let z = [];
    let times = n;
    for(let i = x; times > 0; i += x){
        z.push(i)
        times--
    }
    return z;
}

// Reversing Words in a String

function reverse(string){
    return string.split(' ').reverse().join(' ')
}

// L1: Set Alarm

function setAlarm(employed, vacation){
    return employed && !vacation
}

// Reverse List Order

function reverseList(list) {
    return list.reverse()
}

// Define a card suit

function defineSuit(card) {
    return {
        '♣' : 'clubs',
        '♦' : 'diamonds',
        '♥' : 'hearts',
        '♠' : 'spades',
    }[card[card.length - 1]]
}

// Plural

function plural(n) {
    if(n<1) return true
    else if(n === 1) return false
    else return true
}

// Check same case

const isNotLetter = s => s === s.toUpperCase() && s === s.toLowerCase();
const register = s => s === s.toUpperCase() ? 'U' : 'L';

function sameCase(a, b){
    if(isNotLetter(a) || isNotLetter(b)) return -1
    return register(a) === register(b) ? 1  : 0;
}

// Fundamentals: Return

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}

function exponent(a,b){
    return a ** b
}

function subt(a,b){
    return a -b
}