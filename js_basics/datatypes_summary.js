// datatypes=>primitive and non-primitive\

// #primitve=>all primitive types are call by value means copying from somewhere else not affect the real data which is strored in memory 
//7 types:String,Number,Boolean,Null,undefined,Symbol-to make value unique we use this,BigInt-scientific value covered in this.
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid)//false


const bigno=3545467777777777777777777777777777n//pinch n to bigInt
// Reference type or Non-primitive=>Referece is directly allocate to the memory

//Array, Objects, Functions

