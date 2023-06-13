// Arrays Similar

function arraysSimilar(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())
}

// Reverse every other word in the string

function reverse(str){
    return str
        .trim()
        .split(' ')
        .map((el, i) => {
            return i % 2
                ? el.split('').reverse().join('')
                : el;
        })
        .join(' ')
}