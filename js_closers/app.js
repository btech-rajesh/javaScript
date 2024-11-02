// // closures=>a lexigographically scope of a function with it chile function which can scope/acces all its variable 

// // A closure in JavaScript is a function that has access to the variables and parameters of its 
// // outer function, even after the outer function has finished executing. Closures are created .
// // when a function is created, and are a form of lexical scoping. 


// function outer(){
//     let name="rajesh";
//     let name1="pachauri"
   
//     function inner(){
//         let val=23;
//         console.log(name);
//         function inner2(){
//             console.log(name1);
//             console.log(val);
//         }
//         inner2();
//     }
//     inner();
// }

// outer();
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log("heyy")
//       console.log(name);
//     }
//     console.log("preetyy")
//     return displayName;
   
//   }
  
//   const myFunc = makeFunc();
//   myFunc();
document.getElementById("orange").onclick =function(){
    document.body.style.backgroundColor=`orange`
}
