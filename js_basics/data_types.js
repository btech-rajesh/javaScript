
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')//this is for the uniqueness of an datatypes,here id and anotherid is both is diffrent things
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// -----------------------------------******------------------------------------------------------------


// -primitive datatypes are stored in stack ,and non-primitive(refrence);

//  memory stord in stack are passed by its copy....



// but in heap case it have always reference it means changes are over original values, e.g->
let f="rajeshpachauri.com";
let f1=f;
 f1="i think it will change";
console.log(f1);

let objf={
    email:"rajesh@google.com",
    upi:"raj@123yxl",
}
let objf1=objf;
objf1.email= "raj@gooogle.com";
console.log(objf.email);
console.log(objf1.email); 