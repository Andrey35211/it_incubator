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