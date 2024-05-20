//network request - request facilitated by the client (chrome/browser) to the server(backend) - get data or manipulate an existing data
//API - Application Programming Interface
//facilitate communication btween a client (browser/chrome) and the server
//client - chrome browser
//server - JSON PLACEHOLDER

//guide
//REST API/RESTFUL API - type of API for web applications
//HTTP - the protocol used by web applications to facilitate communications
//HTTP - HYPERTEXT TRANSFER PROTOCOL
//types(verb/actions/methods) of HTTP - GET, POST, PUT, DELETE
// GET - get users data
// POST - create users data
// PUT - update users data
// DELETE - delete users data
//sometimes the HTTP types are called "CRUD OPERATION"
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE

//fetch API
//key steps
//URL - Universal Resource Locator - https://jsonplaceholder.typicode.com
//print out data - HTTP METHOD - GET
//fetch(url, options);
//options - {}
//fetch - uses the built-in promises under the hood
const container = document.querySelector('.container');

const data = fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        
        let filter_array = response.filter(function (data) {
            if (data.userId === 1) {
                return data;
            }
        });

        filter_array = filter_array.map(function (data) {
            return {
                body: data.body,
                title: data.title
            }
        });

        console.log(filter_array);

        displayData(filter_array);
    })
    .catch(function (error) {
        console.log(error);
    })

//console.log(data);

//higher order array functions - substitute for For Loop
//map - "returns" a new array
//filter - helps to "return" part of a data - data manipulation
//forEach - loop through an array of data

function displayData(array) {
    let display_content = '';

    array.forEach(function(data) {
        const { body, title } = data;

        display_content += `<div>
                            <h3>${title}</h3>
                            <div>${body}</div>  
                        </div>`
    });

    container.innerHTML = display_content;
}