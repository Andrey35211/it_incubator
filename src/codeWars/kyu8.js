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

const x = [1,2,3,4]

function grow(x){
    const arr = x.reduce((x, arr) => x * arr);
    return arr
}

// Returning Strings

let name = "Andrey";

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    const sum = classPoints.reduce((acc, number) => acc + number, 0);
    const length = classPoints.length;
    const average = sum / length;
    if(yourPoints > average){
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

function stringToArray(string){
    return string.split(' ');
}

// Convert a Number to a String!

function numberToString(num) {
    return String(num)
}

// Counting sheep...

function countSheeps(arrayOfSheep) {
    arr =  arrayOfSheep.filter(el => el === true);
    return arr.length
}

// Categorize New Member

// Jenny's secret message

function greet(name){
    if(name === "Johnny"){
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

function booleanToString(b){
    return String(b)
}


