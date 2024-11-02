 const arr=[1,2,3,4,5,6]
 const  names=["raj","shyam"]

 const num=new Array(1,2,3,4)
//  console.log(num)

//  console.log(arr[0])

 //Array methods

//  arr.push(6);
// //  arr.pop()
//  arr.unshift(9)//time consuming method in arr
//  arr.shift()//shift to right means remove the first element from an array


//  console.log(arr.includes(5))
//  console.log(arr.indexOf(2))
// const newno= arr.join()
// console.log(typeof newno)


// ==>  slice,splice

console.log("A",arr);

const arr1=arr.slice(1,3);
console.log("B" , arr1)
console.log("original=>"+arr)

const arr2=arr.splice(1,3)//splice change the original array and print value in splice 1,3 
console.log("C" , arr2)


console.log(arr)//here original array is changed due to splice

