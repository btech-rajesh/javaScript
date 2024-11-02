//1.
function addNo(a,b){//a,b->are parameters

   console.log(a+b);
}
addNo(2,3);//arguments


//  2.
function mulno(a,b){

    return a*b;
 }
 const ans=mulno(2,3);
 console.log(ans)



//3.
 function  printname(name){//default value for the parameter is undefined
   if(!name){
    console.log("Please enter your name");
    return;
   }
    return `${name} just logged In !`

 }
 console.log(printname("rajesh"));