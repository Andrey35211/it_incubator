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

// String average

function averageString(str) {

    if(!str) return "n/a"
    let d ={
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9
    }
    let n ={
        0 : 'zero' ,
        1 :'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
    }
    const da = str.split(' ');
    let sum = 0;
    for(let i = 0; i < da.length; i++) {
        if(d[da[i]] !== undefined) {
            sum += d[da[i]]
        } else {
            return "n/a"
        }
    }
    const avg = Math.floor(sum / da.length);

    return n[avg]
}

// Who likes it?

function likes(names) {
    if(!names.length) return "no one likes this";
    if(names.length === 1) return `${names[0]} likes this`;
    if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
    if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if(names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}