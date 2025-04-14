const products = [
    { id: 1, name: "Laptop", price: 800, img: "laptop.jpg" },
    { id: 2, name: "Phone", price: 500, img: "phone.jpg" },
    { id: 3, name: "Headphones", price: 100, img: "headphones.jpg" }
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
}

function checkout() {
    alert("Proceeding to checkout!");
}

window.onload = displayProducts;
