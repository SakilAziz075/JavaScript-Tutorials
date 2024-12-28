// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






const tinderUser = new Object();

tinderUser.id = "1234abc"
tinderUser.name = "sammy"
tinderUser.IsLoggedIn = false

//console.log(tinderUser)

const regularUser= {
    email: "some@gmail.com",
    fullName:{
        userfullName:{
            firstName : "sakil",
            lastName : "Aziz"
        }
    }
}

// console.log(regularUser.fullName?.userfullName)  // '?' is used if there is a possibility that 
                                                    //  fullName key's value may be NULL 




const obj1 = {1: "a" , 2: "b"}
const obj2= {3: "a" , 4: "b"}

//const obj3 = Object.assign( {} ,obj1 , obj2)

//OR
const obj3 = {...obj1 , ...obj2}    //Spreading Obj1 and Obj2
// console.log(obj3);




const users = [
    {
        id:1,
        email: "123@gmail.com"
    },
    {
        id:1,
        email: "123@gmail.com"
    },
    {
        id:1,
        email: "123@gmail.com"
    },
]
users[1].email          //use a loop to iterate each object


// console.log("output of Object.keys(tinderUser) ");
// console.log(Object.keys(tinderUser))

// console.log("output of Object.values(tinderUser) ");
// console.log(Object.values(tinderUser))

// console.log("output of Object.entries(tinderUser) ");
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course ={
    courseName: "JS",
    price: "999",
    courseInstructor: "Sakil" 
}


//course.courseInstructor 
//OR
const {courseInstructor} = course
console.log(courseInstructor);




const {courseInstructor:Instructor} = course    //here we are giving another name to 
                                                // to the courseInstructor object 
console.log(Instructor);
