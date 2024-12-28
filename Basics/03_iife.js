// IMMEDIATELY INVOKED FUNCTION EXPRESSION   ->   ()()

//named IIFE
(function chai()
{
    console.log(`DB CONNECTED`)   
})();


//Unnamed IIFE
((user) => {
    console.log(` ${user} DB TWO CONNECTED`)   
})("Sakil");