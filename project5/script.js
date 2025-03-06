document.addEventListener('DOMContentLoaded', () => {
const product =[
    {id:1, name:"Product 1 " , price:20.00 },
    {id:2, name:"Product 2 " , price:10.00 },
    {id:3, name:"Product 3 " , price:40.00 }
]
const cart =[]
const productList = document.getElementById("product-list")
const cartItems = document.getElementById("cart-items")
const emptyCartMessage = document.getElementById("empty-cart")
const cartTotalMessage = document.getElementById("cart-total")
const totalPriceDisplay = document.getElementById("total-price")
const checkoutBtn = document.getElementById("checkout-btn")


product.forEach(product => {
    const productDiv = document.createElement('div')
    productDiv.classList.add("product")
    productDiv.innerHTML = ` 
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart </button>`;
    productList.appendChild(productDiv)
});

productList.addEventListener("click",(e)=>{
if(e.target.tagName == 'BUTTON')    {
    const productId = parseInt(e.target.getAttribute("data-id"));
    const products =  product.find((p)=> p.id == productId);
    addTOCart(products)
}
})
function addTOCart(products){
    cart.push(products)
    renderCart(cart)
}

/**
 * Renders the items in the cart on the page
 */
function renderCart(){
    cartItems.innerHTML="";
    let totalPrice =0;


    if(cart.length>0){
 emptyCartMessage.classList.add("hidden")
 cartTotalMessage.classList.remove("hidden")
 cart.forEach((item, index) =>{
    totalPrice += item.price;
    const cartItem =document.createElement("div");
    cartItem.innerHTML =`
    ${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(cartItem)
    totalPriceDisplay.textContent =`${totalPrice.toFixed(2)}`
 })
    }
    else{
        emptyCartMessage.classList.remove("hidden")
        totalPriceDisplay.textContent = `0.00`;
    }
}
checkoutBtn.addEventListener("click",() =>{
    cart.length= 0;
    alert("Checkout Successfully")
    renderCart();
})
})