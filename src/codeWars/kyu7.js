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

// The Office IV - Find a Meeting Room

function meeting(x){
    const f = x.indexOf('O')
    return f > -1 ? f : 'None available!'
}

// Mumbling

function accum(s) {
    let res = ''
    for(let i = 0; i < s.length; i++){
        res += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i < s.length - 1 ? '-' : '')
    }
    return res
}

// Coprime Validator

function isCoprime(x, y) {
    const min = Math.min(x, y)

    for(let i = 2; i <= min; i++){
        if(!(x % i) && !(y % i)) return false
    }
    return true
}

// Find the vowels

function vowelIndices(word){
    const vowels = 'aeiouyAEIOUY';
    const res =[];

    for (let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) res.push(i + 1)
    }

    return res
}

// Extra Perfect Numbers (Special Numbers Series #7)

function extraPerfect(n){
    const res = [];

    for (let i = 1; i <= n; i += 2) {
        res.push(i)
    }
    return res
}

// The fusc function -- Part 1

function fusc(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n % 2){
        return fusc(Math.floor(n/2)) + fusc(Math.ceil(n/2))
    }
    return fusc(n/2)
}

// Nice Array

function isNice(arr){
    if(!arr.length) return false
    const voc = {}
    arr.forEach(n => voc[n] = 1)
    return arr.every(n => voc[ n - 1 ] || voc[ n + 1 ])
}

// Hëävÿ Mëtäl Ümläüts

function heavyMetalUmlauts(boringText) {
    let res = ''
    const voc = {
        A : 'Ä', E : 'Ë', I : 'Ï',
        O : 'Ö', U : 'Ü', Y : 'Ÿ',
        a : 'ä', e : 'ë', i : 'ï',
        o : 'ö', u : 'ü', y : 'ÿ',
    }
    for(let i = 0; i < boringText.length; i++) {
        if(voc[boringText[i]]) res += voc[boringText[i]];
        else res += boringText[i]
    }
    return res;
}

// First-Class Function Factory

const factory = x => arr => arr.map(el => el * x)

// Thinkful - Object Drills: Quarks

class Quark{
    constructor(color, flavor){
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;
    }
    interact(quark){
        const quarkColor = quark.color;
        quark.setColor(this.color);
        this.color = quarkColor;
    }
    setColor(color){
        this.color = color
    }
}