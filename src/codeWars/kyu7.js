// You're a square!

var isSquare = function(n){
    let square = n ** (1/2)
    if(Number.isInteger(square) && square >= 0){
        return true
    } else {
        return false
    }
}

// Binary Addition

function addBinary(a,b) {
    let sum = a + b;
    let binary = (sum % 2).toString();
    for (; sum > 1; ) {
        sum = parseInt(sum / 2);
        binary =  (sum % 2) + (binary);
    }
    return binary;
}

// Friend or Foe?

function friend(friends){
    return friends.filter(word => word.length === 4);
}

// Reverse words

function reverseWords(str) {
    let arr = str.split(" ");
    let strReverse = "";

    for (let i = 0; i < arr.length; i++) {
        strReverse += arr[i].split("").reverse().join("") + " ";
    }

    return strReverse.trim();
}

// Sum ALL the arrays!

function arraySum(arr) {
    const b = arr.toString().split(',');
    let sum = 0;

    for(let i = 0; i < b.length; i++) {
        sum += Number.isNaN(Number(b[i])) ? 0 : Number(b[i])
    }
    return sum;
}

// Write shortest function to calculate Average number of Array

const avg = a => a.reduce((a,b) => a + b) / a.length;

// sPoNgEbOb MeMe

function spongeMeme(sentence) {
    let res = '';
    for(let i = 0; i < sentence.length; i++){
        res += ( i % 2 ) ? sentence[i].toLowerCase() : sentence[i].toUpperCase()
    }
    return res
}

// String repeat

function repeatStr (n, s) {
    return s.repeat(n);
}

// Print a Rectangle Using Asterisks

function getRectangleString(width, height) {
    const rn = '\r\n'
    const tb = '*'.repeat(width) + rn;
    const center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn).repeat(height - 2) : '' ;
    return height > 1 ? (tb + center + tb) : tb.repeat(height)
}

// Find the missing element between two arrays

function findMissing(arr1, arr2) {
    let index;
    for (let i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i])
        if (  index > -1) {
            arr2.splice(index, 1)
        } else {
            return arr1[i]
        }
    }
}

// Flatten and sort an array



function flattenAndSort(array) {
    let res = [];
    array.forEach(el => {
        if(Number.isInteger(el)){
            res.push(el)
        } else if (Array.isArray(el)  && el.length > 0) {
            res = [...res, ...el]
        }
    })
    return res.sort((a,b) => a-b)
}

// Sum of the first nth term of Series

function SeriesSum(n)
{
    if(!n) return '0.00'
    let sum = 1;
    let j = 4;
    for(let i =1; i < n; i++) {
        sum += 1 / j;
        j += 3
    }
    return sum.toFixed(2);
}