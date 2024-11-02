const arr=['rajesh','sita','shyam']
const num=['kumar','devi','pandit']
const add=['ekhu','mathura','delhi']

//merging array using concat and spread
const newarr=arr.concat(num);
console.log(newarr)

const newone=[...arr,...num,...add]//spread method
console.log(newone)

const demo=[1,2,3,[1,2,3],4,5,6,[4,5,6],7,8]

const realarr=demo.flat()
console.log(realarr)

const a=Array.from('rajesh')//important->make a array of charcters
console.log(a)
let s=100;
let s1=200;
let s2=300;
console.log(Array.of(s,s1,s2));




