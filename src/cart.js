//DEBE contener las funcionalidades del carrito de compras.
// Función para actualizar el contenido del carrito en la interfaz
function actualizarCarrito() {
    carritoContenedor.innerHTML = ''; // Limpiar el contenido actual
    let total = 0;

    if (carrito.length === 0) {
        carritoContenedor.innerHTML = '<h3>Añade un plato a tu menú</h3>';
    } else {
        carrito.forEach(item => {
            total += item.price * item.cantidad;

            const productoHTML = `
                <div class="cart-container">
                    <button class="close-button" data-id="${item.id}"><img src="./assets/img/close.svg" alt="close"></button>
                    <div class="text-container">
                        <h3>${item.name}</h3>
                        <h5>${(item.price * item.cantidad).toFixed(2)} €</h5>
                    </div>
                    <div class="quantity-container" id="quantity">
                        <button class="quantity-increase" data-id="${item.id}">+</button>
                        <p class="quantity">${item.cantidad}</p>
                        <button class="quantity-decrease" data-id="${item.id}">-</button>
                    </div>
                </div>
            `;
            carritoContenedor.innerHTML += productoHTML;
        });
    }

    totalContenedor.textContent = `Total: ${total.toFixed(2)} €`;
}

// Manejo de eventos para eliminar o actualizar cantidades
carritoContenedor.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.id);

    if (e.target.classList.contains('close-button')) {
        eliminarProductoDelCarrito(id);
    }

    if (e.target.classList.contains('quantity-increase')) {
        cambiarCantidadProducto(id, 1);
    }

    if (e.target.classList.contains('quantity-decrease')) {
        cambiarCantidadProducto(id, -1);
    }

    actualizarCarrito();
});

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) carrito.splice(index, 1); // Eliminar producto del carrito
}

// Función para cambiar la cantidad de un producto en el carrito
function cambiarCantidadProducto(id, cantidad) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) eliminarProductoDelCarrito(id); // Eliminar si la cantidad llega a 0
    }
}

// Vaciar carrito después de pagar
document.getElementById('pay-button').addEventListener('click', () => {
    carrito.length = 0; // Vaciar el carrito
    actualizarCarrito();
    alert('¡Gracias por tu compra!');
});

/*import { products } from '../assets/data/data.js';
const carrito = [];

function agregarAlCarrito(producto) {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartContainer = document.getElementById('cart-products');
    const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    cartContainer.innerHTML = carrito.map(item => `
        <div class="cart-container">
            <button class="close-button">X</button>
            <div>
                <h3>${item.name}</h3>
                <p>Precio: ${item.price.toFixed(2)}€</p>
                <p>Cantidad: ${item.cantidad}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('cart-total').textContent = `Total: ${total.toFixed(2)}€`;
}

/*document.addEventListener('DOMContentLoaded', () => {
    const carrito = []; // Array para almacenar los productos añadidos al carrito
    const carritoContenedor = document.getElementById('cart-products');
    const totalContenedor = document.getElementById('cart-total');

    // Agregar evento a los botones "Añadir"
    document.getElementById('products').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-button')) {
            const productoCard = e.target.closest('.product-container');
            const titulo = productoCard.querySelector('h3').textContent;

            // Encontrar el producto en el array `products` usando su título
            const productoSeleccionado = products.find(producto => producto.name === titulo);

            if (productoSeleccionado) {
                agregarProductoAlCarrito(productoSeleccionado);
                actualizarCarrito();
            }
        }
    });

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(producto) {
        const existe = carrito.find(item => item.id === producto.id);
        if (existe) {
            existe.cantidad += 1; // Incrementar la cantidad si ya existe en el carrito
        } else {
            carrito.push({ ...producto, cantidad: 1 }); // Añadir nuevo producto al carrito
        }
    }

    // Función para actualizar la vista del carrito
    function actualizarCarrito() {
        carritoContenedor.innerHTML = ''; // Limpiar contenido anterior

        if (carrito.length === 0) {
            carritoContenedor.innerHTML = '<h3>Añade un plato a tu menú</h3>';
        } else {
            carrito.forEach(producto => {
                const carritoItem = document.createElement('div');
                carritoItem.classList.add('cart-container');
                carritoItem.innerHTML = `
                    <button class="close-button" data-id="${producto.id}">
                        <img src="./assets/img/close.svg" alt="close">
                    </button>
                    <div class="text-container">
                        <h3>${producto.name}</h3>
                        <h5>${(producto.price * producto.cantidad).toFixed(2)}€</h5>
                    </div>
                    <div class="quantity-container">
                        <button class="quantity-decrease" data-id="${producto.id}">-</button>
                        <p class="quantity">${producto.cantidad}</p>
                        <button class="quantity-increase" data-id="${producto.id}">+</button>
                    </div>
                `;
                carritoContenedor.appendChild(carritoItem);
            });
        }

        // Actualizar el total
        const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
        totalContenedor.textContent = `Total: ${total.toFixed(2)}€`;
    }

    // Manejar eventos en el carrito (incrementar, disminuir, eliminar)
    carritoContenedor.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id, 10);

        if (e.target.classList.contains('close-button')) {
            eliminarProductoDelCarrito(id);
        } else if (e.target.classList.contains('quantity-increase')) {
            cambiarCantidadProducto(id, 1);
        } else if (e.target.classList.contains('quantity-decrease')) {
            cambiarCantidadProducto(id, -1);
        }
        actualizarCarrito();
    });

    // Función para eliminar un producto del carrito
    function eliminarProductoDelCarrito(id) {
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) {
            carrito.splice(index, 1);
        }
    }

    // Función para cambiar la cantidad de un producto
    function cambiarCantidadProducto(id, cantidad) {
        const producto = carrito.find(item => item.id === id);
        if (producto) {
            producto.cantidad += cantidad;
            if (producto.cantidad <= 0) {
                eliminarProductoDelCarrito(id);
            }
        }
    }
});
// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart");
    const sidebar = document.querySelector("aside");
  
    // Inicialmente ocultamos el aside si no está oculto
    sidebar.style.transform = "translateX(100%)";
    sidebar.style.transition = "transform 0.3s ease-in-out";
  
    cartButton.addEventListener("click", () => {
      // Verificamos si el aside está abierto o cerrado
      const isHidden = sidebar.style.transform === "translateX(100%)";
  
      // Cambiamos el estado de visibilidad
      sidebar.style.transform = isHidden ? "translateX(0)" : "translateX(100%)";
    });
  });
  */