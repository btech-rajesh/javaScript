let name="rajesh"
let age=20;
// console.log(name + age+" hai");

console.log(`Hello this is ${name} and my age count is ${age}`);//string inter polation 

const myname=new String('rajesh-rk')
 console.log(myname.__proto__);//string object

 console.log(myname.toLowerCase());
 console.log(myname.toUpperCase())
 console.log(myname.charAt(3))
 console.log(myname.indexOf('e'))

 const name1=myname.substring(0,4)
 console.log(name1)

 const name2=myname.slice(-8,4)
 console.log(name2)

 var name3="   rajesh    "
 console.log(name3)
  console.log(name3.trim())

  var url="http//rajesh.com//rajeshpachauri"
  console.log(url.replace('.com','.google'))

 console.log( url.includes('rajesh'))

 const frndname=['rajesh','manish','pushpendra']
 console.log(frndname.split(','))//not a more functionn in string>


