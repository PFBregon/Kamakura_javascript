import { products } from '../assets/data/data.js';
import { mostrar_menu_general } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const filtroDelMenu = document.getElementById('filters');
    const productosContenedor = document.getElementById('products');

    // Agregar evento de click a cada botón de filtro
    filtroDelMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter')) {
            const categoriaSeleccionada = e.target.textContent.toLowerCase();

            // Filtrar productos
            const productosFiltrados = categoriaSeleccionada === 'todos'
                ? products // Mostrar todos los productos
                : products.filter(producto => producto.category === categoriaSeleccionada);

            // Mostrar productos filtrados
            mostrar_menu_general(productosFiltrados);
        }
    });

    // Mostrar todos los productos inicialmente
    mostrar_menu_general(products);
});





/*import { mostrar_menu_general } from './menu.js';
import { products } from '../assets/data/data.js';

function initFiltro() {
    const filtros_contenedor = document.getElementById('filters');

    // Escuchar eventos de clic en los botones de filtro
    filtros_contenedor.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter')) {
            const filtro = event.target.textContent.toLowerCase();
            aplicarFiltro(filtro);
        }
    });
}

// Función para aplicar el filtro y mostrar productos
function aplicarFiltro(categoria) {
    if (categoria === 'todos') {
        mostrar_menu_general(products); // Mostrar todos los productos
    } else {
        const productos_filtrados = products.filter(producto => producto.category === categoria);
        mostrar_menu_general(productos_filtrados); // Mostrar productos filtrados
    }
}

export { initFiltro };
*/
/*
function aplicarFiltro(categoria) {
    if (categoria === 'todos') {
        mostrar_menu_general(products); // Mostrar todos los productos
    } else {
        const productos_filtrados = products.filter(producto => producto.category === categoria);
        mostrar_menu_general(productos_filtrados); // Mostrar productos filtrados
    }
}

// Función para manejar el filtrado de productos según el filtro seleccionado
export function manejarFiltro(event, productos) {
    const filtro = event.target.textContent.toLowerCase();  // Obtener el filtro seleccionado en minúsculas
    const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.category === filtro);
    mostrarMenu(productosFiltrados);  // Mostrar los productos filtrados
}

// Función para mostrar los productos en el contenedor
export function mostrarMenu(productos) {
    const contenedor = document.getElementById('products');
    contenedor.innerHTML = productos.map(p => `
        <div class="product-container">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="price-container">
                <h5>${p.price.toFixed(2)}€</h5>
                <button class="add-button">Añadir</button>
            </div>
        </div>
    `).join('');
}



///import { mostrar_menu_general, mostrar_filtros_general } from  "./menu.js";

/// Función para filtrar productos y actualizar la vista
export function manejarFiltro(event, productos) {
    const filtro = event.target.textContent;
    const productosFiltrados = filtro === 'todos' ? productos : productos.filter(p => p.category === filtro);
    mostrarMenu(productosFiltrados);
}

// Función para mostrar los productos en la interfaz
export function mostrarMenu(productos) {
    const contenedor = document.getElementById('products');
    contenedor.innerHTML = productos.map(p => `
        <div class="product-container">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="price-container">
                <h5>${p.price.toFixed(2)}€</h5>
                <button class="add-button">Añadir</button>
            </div>
        </div>
    `).join('');
}


/*
function mostrar_filtros_general(datos) {
    // obtener el documento del dom a los filtros
    let filtros_contenedor = document.getElementById('filters');
    // recorer los datos
    let filtro_boton = "";
    datos.map(filtro => {
        filtro_boton += `<button class="filter">${filtro.category}</button>`
    });
  //  filtros_contenedor.innerHTML = filtro_boton;
}

*/
/*
function manejarFiltro(event, productos) {
    const filtroSeleccionado = event.target.textContent;

    if (filtroSeleccionado) {
        // Filtrar los productos según la categoría
        const productosFiltrados = (filtroSeleccionado === 'todos') 
            ? productos
            : productos.filter(producto => producto.category === filtroSeleccionado);
    }
        // Llamar a la función que actualizará la vista con los productos filtrados
        mostrar_menu_general(productosFiltrados);
    }

// Función para mostrar los productos en la interfaz
function mostrar_menu_general(productoDato)

// Exportar las funciones necesarias para ser utilizadas en otros archivos
export { manejarFiltro, mostrar_menu_general };

*/



//DEBE buscar los productos por los filtros
/*
function aplicarFiltro(filtroSeleccion, productos) {
let filtrado = [];

if(filtroSeleccion === "todos"){
    filtrado = productos
}
else{
    filtrado = productos.filter(producto => producto.category === filtroSeleccion)
}
}

export{aplicarFiltro};

*/
/*
// Función para filtrar los productos según la categoría seleccionada
function aplicarFiltro(filtroSeleccionado, productos) {
    let productosFiltrados = [];

    if (filtroSeleccionado === 'todos') {
        // Si el filtro es "todos", mostramos todos los productos
        productosFiltrados = productos;
    } else {
        // Filtrar los productos por categoría
        productosFiltrados = productos.filter(producto => producto.category === filtroSeleccionado);
    }

    // Mostrar los productos filtrados
    mostrar_menu_general(productosFiltrados);
}

// Función para manejar el clic en los filtros
function manejarFiltro(event, productos) {
    if (event.target && event.target.matches("button.filter")) {
        const filtroSeleccionado = event.target.getAttribute("data-filter");
        aplicarFiltro(filtroSeleccionado, productos);
    }
}
*/
