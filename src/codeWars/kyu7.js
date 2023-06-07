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