// Comment Your JavaScript Code

// This is an in-line comment.

/* This is a
multi-line comment */

// Declare JavaScript Variables

var myName;

// Storing Values with the Assignment Operator

var a;
a = 7;

// Assigning the Value of One Variable to Another

var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator

var a = 9;

// Declare String Variables

var myFirstName = "Andrey";
var myLastName = "Sergienko";

// Understanding Uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// Add Two Numbers with JavaScript

const sum = 10 + 10;

// Subtract One Number from Another with JavaScript

const difference = 45 - 33;

// Multiply Two Numbers with JavaScript

const product = 8 * 10;

// Divide One Number by Another with JavaScript

const quotient = 66 / 33;

// Increment a Number with JavaScript

let myVar = 87;
myVar++;

// Decrement a Number with JavaScript

let myVar = 11;
myVar--;

// Create Decimal Numbers with JavaScript

const ourDecimal = 5.7;
const myDecimal = 5.7;

// Multiply Two Decimals with JavaScript

const product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript

const quotient = 4.4 / 2.0;

// Finding a Remainder in JavaScript

const remainder = 11%3;

// Compound Assignment With Augmented Addition

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator

const myStr = "This is the start. " + "This is the end.";

// Concatenating Strings with the Plus Equals Operator

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// Constructing Strings with Variables

const myName = "Andrey";
const myStr = "My name is" + myName + "and I am well!";

// Appending Variables to Strings

const someAdjective = "cool!";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

// Understand String Immutability

let myStr = "Jello World";

myStr = "Hello World";

// Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];

// Use Bracket Notation to Find the Last Character in a String

const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String

const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " !";

// Store Multiple Values in one Variable using JavaScript Arrays

const myArray = ["hello", 3];

// Nest one Array within Another Array

const myArray = [["Bulls", 23], ["White Sox", 45]];

//Access Array Data with Indexes

