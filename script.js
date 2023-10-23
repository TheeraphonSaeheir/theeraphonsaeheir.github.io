let product = [{
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1681364363935-5320f60904e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1573&q=80",
    Name: "Cream",
    price: 890,
    description: "Wild Honey Moisturising Cream",
    type: "Cream"
},
{
    id: 2,
    img: "https://images.unsplash.com/photo-1564020799643-54f7ab923d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    Name: "Serum",
    price: 1050,
    description: "Wild Honey Moisturising Serum",
    type: "Serum"
},
{
    id: 3,
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
    Name: "Mask",
    price: 1500,
    description: "Wild Honey Moisturising Mask",
    type: "Mask"
}
    ,
{
    id: 4,
    img: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Skincare",
    price: 1080,
    description: "Wild Honey Moisturising Skincare ",
    type: "Skincare"
}

];
const itemcount = document.getElementById('itemcount');


function additem() {
    itemcount.innerHTML = parseInt(itemcount.innerHTML) + 1;
    return itemcount.innerHTML;
}

function deleteditem() {
    if (parseInt(itemcount.innerHTML) > 1) {
        itemcount.innerHTML = parseInt(itemcount.innerHTML) - 1;
        return itemcount.innerHTML;
    }

}

const carts = document.getElementById('addcart');
const cartlist = document.getElementById('cartlist');
const cartitem = document.getElementById('cartitem');
let cartItems = [];
cartlist.innerHTML = carts.innerHTML ;
let carttotal = 0;
let cartstart = 0;
console.log(itemcart);
function addtocart() {
    carttotal = parseInt(cartstart) + parseInt(itemcount.innerHTML);

    const cartDiv = document.createElement('div');
    cartDiv.classList.add("row","border");
    cartDiv.innerHTML = `
    <div class="col-5">
    <img src="logo.jpg" class="img_oncart">
</div>
<div class="col-5 g-0 ">
    <p class="fst-italic fs-6 mt-2 mb-0">Wild Honey Moisturising Cream</p>
    <div class="priceitem">
        <div class="fs-5 mt-0">price :</div><span class="price-cart fw-bold">850 THB</span>
    </div>
    <div class="d-flex justify-content-start mt-2 mb-2">
        <button class="count-cart fw-bold fs-5 shadow-sm" onclick="deleteditemcart()">-</button>
        <div class="count-carts fw-bold mx-2" id="itemoncart"> ${carttotal} </div>
        <button class="count-cart fw-bolder fs-5 shadow-sm" onclick="additemcart()">+</button>
    </div>
</div>
<div class="col-2  fs-5 cart_cancel">
    <button class="btn_cancelcart" >x</button>
</div>
    `;
    cartitem.appendChild(cartDiv);
    carts.innerHTML = parseInt(carts.innerHTML)+ carttotal;
    cartlist.innerHTML = carts.innerHTML ;
    console.log(carttotal);
    return carttotal;
}

function additemcart(){
    const itemcart = document.getElementById('itemoncart');
    cartlist.innerHTML = parseInt(carts.innerHTML)+1 ;
    carts.innerHTML = cartlist.innerHTML;
    itemcart.innerHTML = cartlist.innerHTML;
}

function deleteditemcart(){
    const itemcart = document.getElementById('itemoncart');
    if(parseInt(carts.innerHTML) > 1){
    cartlist.innerHTML = parseInt(carts.innerHTML)-1 ;
    carts.innerHTML = cartlist.innerHTML;
    itemcart.innerHTML = cartlist.innerHTML;
}
}
function likeproduct(button) {
    const isLiked = button.getAttribute("data-liked") === "false";

    if (isLiked) {
        button.innerHTML = '<i class="bi bi-heart-fill"></i>';
        button.style.color = 'red';

    } else {

        button.innerHTML = '<i class="bi bi-heart"></i>';
        button.style.color = 'white';
    }

    button.setAttribute("data-liked", isLiked);
}



function filterproducts(type) {
    const productlistdiv = document.getElementById('product-list');
    productlistdiv.innerHTML = '';
    if (type === "All") {

        product.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add("col-3")
            productDiv.innerHTML = `
            <div class="product-item border-0 border-black rounded">
            <img class="p-list border rounded-top "
              src="${product.img}">
            <div class="product-info border rounded-bottom">
              <p class="fs-6 mb-0 fw-lighter mt-3 text-start mx-3">${product.description}</p>
              <p class="fs-6 fw-bold text-start mx-3 mt-3">${product.price} THB</p>
              <button class="btn product-cart btn-outline-dark">Shop now</button>
              <button class="btn product-fav like-button" onclick="likeproduct(this)" data-liked="false"><i class="bi bi-heart"></i></button>
              
    
            </div>
    
          </div>
        `;
            productlistdiv.appendChild(productDiv);
        });

    } else {
        const filterproduct = product.filter(product => product.type.toLowerCase() === type.toLowerCase());
        filterproduct.forEach(product => {
            const productDiv = document.createElement('div')
            productDiv.classList.add("col-3")
            productDiv.innerHTML = `
            <div class="product-item border-0 border-black rounded">
            <img class="p-list border rounded-top "
              src="${product.img}">
            <div class="product-info border rounded-bottom">
              <p class="fs-6 mb-0 fw-lighter mt-3 text-start mx-3">${product.description}</p>
              <p class="fs-6 fw-bold text-start mx-3 mt-3">${product.price} THB</p>
              <button class="btn product-cart btn-outline-dark">Shop now</button>
              <button class="btn product-fav like-button" onclick="likeproduct(this)" data-liked="false"><i class="bi bi-heart"></i></button>       
            </div>
          </div>
        `;
            productlistdiv.appendChild(productDiv);
        });

    }
}
function searchProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const productlistdiv = document.getElementById('product-list');
    productlistdiv.innerHTML = '';

    product.forEach(product => {
        if (product.description.toLowerCase().includes(searchInput)) {
            const productDiv = document.createElement('div');
            productDiv.classList.add("col-3");
            productDiv.innerHTML = `
                <div class="product-item border-0 border-black rounded">
                    <img class="p-list border rounded-top" src="${product.img}">
                    <div class="product-info border rounded-bottom">
                        <p class="fs-6 mb-0 fw-lighter mt-3 text-start mx-3">${product.description}</p>
                        <p class="fs-6 fw-bold text-start mx-3 mt-3">${product.price} THB</p>
                        <button class="btn product-cart btn-outline-dark">Shop now</button>
                        <button class="btn product-fav like-button" onclick="likeproduct(this)" data-liked="false"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            `;
            productlistdiv.appendChild(productDiv);
        }
    });
}


  const resultsHTML = filteredProducts.map(item => `<div>${item}</div>`).join("");
  resultsContainer.innerHTML = resultsHTML;
};*/
