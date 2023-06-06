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
