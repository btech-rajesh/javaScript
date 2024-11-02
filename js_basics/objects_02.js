const tinderuser=new Object()// this is singleton using constructor
const tinderuser1 ={}// this is non-singleton 
tinderuser.id="123";
tinderuser.name="raj";
tinderuser.isloggedIn=false;

// console.log(tinderuser)
// console.log(tinderuser1)

const regularuser={
    email:"rajesh@1223.com",
    fullname:{
        userfullname:{
            firstname:"rajesh",
            lastname:"pachauri"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={
    firstname:"rajesh",
    lastname:"pachauri",
    age1:20,
    1:10

}
const obj2={
    fn:"himanshu",
    ln:"pachauri",
    age:14,
    2:20
}
const obj3={
    1:2,
    2:3,
    3:4
}
// const obj3={obj1,obj2}
// const obj4={...obj1,...obj2}


//to concatinate the objects
//  const obj4=Object.assign({},obj1,obj2,obj3);//assign return the modify target objects 
// {}->this is the target object
// rest all are the source object which are directly move to an empty objects

 
// console.log(obj4)

// array of objects 
const user=[
    {
        id:1,
        email:"raj@gmail.com"
    },
    {
        id:2,
        email:"raj@google.com"
    },
    {
        id:3,
        email:"raj@google.com"
    },
    {
        id:4,
        email:"raj@google.com"
    }
]
// console.log(user[0].email);

// console.log(tinderuser)

//to get the keys and values of constructor object

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));
// console.log(tinderuser.hasOwnProperty('id'));

//object -Destructure
const course={
    c_id:'123',
    c_price:999,
    c_Instructor:"rajesh"
}
const{c_Instructor:Instructor}=course;
console.log(Instructor)
 