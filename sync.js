//synchronous programming - when everything happens at the same time or one after the other
//asynchronous programming - when everything happens not at the same time - resolving in the background

//sync
let result = 'no response yet';
setTimeout(function(){
    //we make a request to GOOGLE
    result = 'GOOGLE RESPONSE';
    //console.log('response returned')
},3000); //3000 miliseconds - 3seconds
//console.log(result);
//console.log('third call depends on the second call');

function first() {
    console.log('first call')
}

function second() {
    console.log('second call');
}

function third() {
    console.log('third call');
}

first();
second();
third();