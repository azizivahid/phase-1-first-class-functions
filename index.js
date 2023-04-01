function receivesAFunction(callback){
    console.log( "receives a function and calls it")
    callback();
}

receivesAFunction('call back');


function returnsANamedFunction (){
    console.log ('')

    function innerFunction() {
        console.log("Inner function called");
      }
      
   
      return innerFunction;
}


    
function returnsAnAnonymousFunction() {
    return function (name) {
        console.log(name);
    }
}


