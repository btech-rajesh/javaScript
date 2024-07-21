// js ,it is an programming lang, use to give instructoins to the computers

// input(code)=>compt=>output

// variables=>are the container for data

// dynamically type lang->as we can store any value to any variable without specfiying its data types.


// let,const and 
// var=var can be re-declared and can be updated ,a global scope variable
// let=it can't be re-declared but can be updated .a block scope variable
// const=variable can't be re-declared or updated.a block {} scope variable
  

// Data 7  primitive-types=>Number,String,Boolean,Undefined,Null(typeof object),BigInt(123)(123n),Symbol

// NOn-primitive=>objects=>it is a collection of values->(array,function)

// console.log("rajesh")
const userId=1294;
let userName="Rajesh pachauri";
var userGmail="krajeshpachauri@gmail.com";
var userPass=123400;
userCity="Mathura";
let userState;//while declaring only js gives undefined value;

// userId =2344; const variable cantnot assiagned again


/*
var is block and functional scope variable which is updated always and times we need

let=>it is block scope variable which is only upto scoep e.g->
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

same variable are the const and let which we will used for further;


*/
console.log(userId);
userName ="raj pachauri";
userGmail="raj@google.com";
userCity="bengluru";
userPass =939333332;

console.table([userId,userGmail,userPass,userCity,userState]);




