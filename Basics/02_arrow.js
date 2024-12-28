const user = {
    username: "sakil",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},welcome to the website`);   //'this' refers to current context
        console.log("printing the output of 'this':\n" ,this)
    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


//console.log(this)

// const chai= function()
// {
//     let username= "sakil"
//     // console.log(this.username);
//     console.log("calling this in normal function: \n",this)
// }
// chai()





//ARROW FUNCTIONS

// const chai = ()=> 
// {
//     let username= "sakil"
//     console.log(this.username);
//     console.log("calling this in Arrow function: \n",this)
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }        
// console.log(addTwo(3,4))


// //IMPLICIT RETURN 

// const addTwo = (num1, num2) => (num1 + num2)         
// console.log(addTwo(3,4))

// const returnObject = (num1,num2)=> ({username: "Sakil"})    //to return a object we need to wrap it around a 
// console.log(returnObject(3,5))                              //parenthesis