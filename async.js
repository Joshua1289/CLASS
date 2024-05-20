//synchronous programming - when everything happens at the same time or one after the other
//asynchronous programming - when everything happens not at the same time - resolving in the background

//traditional callback
//callback - when a function is passed inside another function as a parameter/argument
function first(gabby) {
    //delay this response for 3s
    //imitate - network request
    //assume that we made a request to GOOGLE for users data
    //slow network - resolving
    //quantity of the data - resolving
    //request fail - rejected
    //asynchronous programming
    setTimeout(function () {
        console.log('first call');
        gabby(third); //second function called - third function passed as argument
    }, 3000);
}

function second(dex) {
    //depends on the data returned from the first function to successfully execute
    //utilizing the data received from GOOGLE in the 'first call', let's assume 
    //we make a network request to another platform(LinkedIn)
    setTimeout(function () {
        console.log('second call');
        dex(); //third function is called
    }, 3000);
}

function third(vex) {
    //depends on the data returned from the second function to successfully execute
    console.log('third call');
}

first(second); // first function called - second function passed as argument