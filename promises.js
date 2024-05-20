// new keyword - it used to create an instance of something
//chaining
//customized promises
const promise_return = new Promise(function (resolve, reject) {
    //Math.random() - 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9
    const random = Math.random();
    //console.log(random);
    if (random > 0.5) {
        resolve(`${random} is greater than 0.5`);
    } else {
        reject(`${random} is less than 0.5`);
    }
})
    .then(function (resolve) {
        //console.log(resolve);
    })
    .catch(function (reject) {
        //console.log(reject);
    });

//built-in promises - network request
//network request - request facilitated by the client (chrome/browser) to the server(backend) - get data or manipulate an existing data

//javascript object
//{
//    name: 'kenny';
//}
//json object
//{
//    "name": "kenny";
//}
function get_dummy_data() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            console.log(response);
            if (response.status === 404) {
                throw new Error('not found');
            }
            return response.json(); //coverts the json data to javascript array of object}).then(function (json) {
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            alert(error);
        });
}

get_dummy_data();
