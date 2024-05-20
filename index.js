//selectors
const display_products = document.querySelector('.container');
const cancel = document.querySelector('.cancel');
const cart_button = document.querySelector('.cart_button');
const sidebar = document.querySelector('.sidebar');
const cart_items = document.querySelector('.cart_items');

//why?

//sample database
const products = [
    {
        product_id: 1,
        product_name: "Laptop",
        product_price: 300,
        product_img: 'https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_id: 2,
        product_name: 'headphone',
        product_price: 200,
        product_img: 'https://plus.unsplash.com/premium_photo-1676998930667-cab56c8fa602?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_id: 3,
        product_name: 'power bank',
        product_price: 500,
        product_img: 'https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_id: 4,
        product_name: 'headset',
        product_price: 500,
        product_img: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_id: 5,
        product_name: 'ear piece',
        product_price: 500,
        product_img: 'https://plus.unsplash.com/premium_photo-1673548916469-cfcc10981d0b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        product_id: 6,
        product_name: 'charger',
        product_price: 500,
        product_img: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const carts = [];

cancel.addEventListener('click', function () {
    sidebar.classList.add('hide');
});

cart_button.addEventListener('click', function () {
    sidebar.classList.remove('hide');
});

function displayProducts() {
    for (let i = 0; i < products.length; i++) {
        const { product_img, product_name, product_price, product_id } = products[i];

        //rendered DOM TREE
        display_products.innerHTML += `<div class='product'>
                <div class='product_img'><img src=${product_img}></div>
                <div class='product_desc'>
                    <div class='product_name'>${product_name}</div>
                    <div class='product_price'>$${product_price}</div>
                </div>
                <div class='add-button'>
                    <button type='button' data-id='${product_id}' id='add-to-cart' class='add-to-cart'>add to cart</button>
                </div>  
            </div>`;
    }
}

displayProducts();

//event - provides info regarding the element users clicked on
display_products.addEventListener('click', function (event) {
    const cart_button_id = event.target.id;
    

    if (cart_button_id === 'add-to-cart') {
        //parseInt - convert a string to a number
        const product_id = parseInt(event.target.getAttribute('data-id'));
        
        let item;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            //the point where the product_id from the database(products)
            //equals the product_id from the DOM
            if (product.product_id === product_id) {
                item = product;
            }
        }
        
        const cart_obj = {
            cart_id: item.product_id,
            cart_img: item.product_img,
            cart_price: item.product_price,
            cart_name: item.product_name
        }
        
        //check to confirm if item already exist
        let cart_item_already_exist = false;
        
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].cart_id === cart_obj.cart_id) {
                cart_item_already_exist = true;
            }
        }
        
        if (cart_item_already_exist === true) {
            alert('Item already added to cart');
            return;
        }
        
        carts.push(cart_obj);
        
        sidebar.classList.remove('hide');
        displayCarts();
    }
});

function displayCarts() {
    if (carts.length === 0) {
        cart_items.innerHTML = '<div class="empty">No Cart Item</div>'
        return;
    }

    let carts_lists = '';

    for (let i = 0; i < carts.length; i++) {
        const { cart_img, cart_name, cart_price, cart_id } = carts[i];

        //rendered DOM TREE
        carts_lists += `<div class="cart_item">
                            <div class="cart_img">
                                <img src="${cart_img}" alt="${cart_name}">
                            </div>
                            <div class="cart_action">
                                <div class="cart_item_name">${cart_name}</div>
                                <div class="cart_item_price">$${cart_price}</div>
                                <input type="text" value="1" id="cart_value">
                            </div>
                            <div class="cart_trash">
                                <button data-id='${cart_id}' type="button" style="background-color: red;">delete</button>
                            </div>
                        </div>`;
    }

    cart_items.innerHTML = carts_lists;
}

displayCarts();