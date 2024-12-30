const promiseOne = new Promise(function (resolve, reject) {
    //Do an asyn task
    //DB calls , cryptography , network

    setTimeout(function () {
        console.log('Asyn task is complete');
        resolve()       //resolve() connects to then()
    }, 1000)
})


//consumption process
promiseOne.then(function () {
    console.log("promised consumed");
})




new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Asyn 2 resolved");
})




const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Sakil", email: "sakil@gmail.com" })
    }, 1000);
});

promiseThree.then(function (user) {       //Parameters of 'resolve()' is sent as the parameter 
    console.log(user)                   //for the callback function of 'then()'
})




//USE OF THEN and CATCH function


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let ERROR1 = false;

        if (!ERROR1) {
            resolve({ UserName: "Sakil", Password: "1234" })
        }

        else {
            reject('ERROR: Something Went Wrong')
        }

    }, 1000)
})

promiseFour
    .then((user) => {         //This frst 'then()s' callback functions gets the parameter of the resolve
        console.log(user);
        return user.UserName
    })
    .then((name) => {                  //The 2nd 'then()s' callback function gets the parameter returned 
        console.log(name);              //by the callback function of the previous 'then()'
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally( ()=>{
        console.log("promise is either rejected or resolved")
    })






//USAGE OF ASYNC AND AWAIT      -> Mostly used for Database Connection 


const promiseFive= new Promise( function(resolve, reject){
    setTimeout(function () {
        let ERROR1 = true;

        if (!ERROR1) {
            resolve({ UserName: "JavaScript", Password: "1234" })
        }

        else {
            reject('ERROR: JS Went Wrong')
        }

    }, 1000)
});

async function consumePromiseFive(){
    try 
    {
        const response = await promiseFive;
        console.log(response);  
    } 
    catch (error) 
    {
        console.log(error);
    }
}
consumePromiseFive()




// async function getAllUsers(){

//     try 
//     {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
        
//     } 
//     catch (error) 
//     {
//         console.log("E:" ,error);
            
//     }
// }

// getAllUsers()





fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
})
.then( (data)=>{
    console.log(data);
})
.catch( (error)=> console.log(error))















