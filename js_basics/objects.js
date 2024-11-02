//singleton=>jb bhi hm literals ki trh declare krte h tb singleton ni bnta h


//object literals=this is obj literals
// Object.create ->this is a constructor method which make a singleton 


const mysym=Symbol("key1");

const jsuser={
    name:"rajesh",
    "sirname":"kumar Pachauri",
    age:20,
    [mysym]:"mykey1",// to use symbols in objects
    location:"Delhi",
    email:"rajeshoachauri@google.com",
    lastlogin:["monday","saturday"]
}
//to access obj value=>

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser.sirname)
// console.log(jsuser["sirname"])

// console.log( (jsuser[mysym]))

// jsuser.email="rajesh@123.com";
// console.log(jsuser["email"])

// Object.freeze(jsuser)// to resume changes in an objects
// jsuser.location="Benglaure";
// console.log(jsuser["location"]);
// console.log(jsuser)

jsuser.greeting=function(){
    console.log(`Hello,jsusers ${this.name}`)
}
jsuser.greeting2=function(){
    console.log(`hello,js users "Happy Diwali"  ${location}`)
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2);
