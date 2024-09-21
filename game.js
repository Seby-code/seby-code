// script.js

// Base de données des produits
const products = [
    { id: 1, name: "Produit 1", price: 50, image: "product1.jpg" },
    { id: 2, name: "Produit 2", price: 75, image: "product2.jpg" },
    { id: 3, name: "Produit 3", price: 30, image: "product3.jpg" },
];

// Tableau pour le panier
let cart = [];

// Fonction pour afficher les produits
function displayProducts() {
    const productContainer = document.querySelector('.product-container');
    products.forEach(product => {
        const productElement = document.createElement('article');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Prix : ${product.price}€</p>
            <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Fonction pour mettre à jour l'affichage du panier
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.price}€</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = `Total : ${totalPrice}€`;
}

// Événement pour les boutons "Ajouter au panier"
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    document.querySelector('.product-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
});
