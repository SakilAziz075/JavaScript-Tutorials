// for of -> used for Arrays

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "hello world";
// for(const greet of greetings){
//     console.log(`each char is ${greet}`)
// }
 



//Map -> they are not iterable

// const map1 = new Map;
// map1.set('IN' , "India")
// map1.set('USA' , "United States of America")
// map1.set('FR' , "Frances")
// map1.set('IN' , "India")

// console.log(map1);

//DESTRUCTING THE MAP 

// for(const [key,value] of map1){
//     console.log(key, ':' ,value);
// }







//OBJECTS -> we need to use for-in loop

const myObject1 = {
    cpp : "C++",
    js : "JavaScript",
    rb : "Ruby"
}

// //Object are not iterable 
// for(const [key,value] of myObject1){
//     console.log(key, ':' ,value);
// }


// for (const key in myObject1) {
//     console.log(`${key} is the shortform for ${myObject1[key]}\n`);

// }


// const programming = ["C++","Java","Ruby"]


// console.log("printing the keys directly");
// for (const key in programming) {
//     console.log(key);
// }

// console.log("\n");

// console.log("printing the values using programing[key]");
// for (const key in programming) {
//     console.log(programming[key]);
// }





//HIGHER ORDER FUNCTIONS AND CALLBACK FUNCTIONS

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )



// coding.forEach( (item) => {
//     console.log(item);
// } )



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)







// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )





const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
