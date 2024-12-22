import { mostrar_filtros_general, mostrar_menu_general } from './menu.js';
import { filters, products } from '../assets/data/data.js';

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar los filtros
    mostrar_filtros_general(filters);
    // Mostrar el menú completo al inicio
    mostrar_menu_general(products);
});


/*import {filters, products} from "../assets/data/data.js";
import {manejarFiltro, mostrar_menu_general} from "./searcher.js";
//import { manejarFiltro } from "./searcher.js"
// evento para productos
document.addEventListener("DOMContentLoaded", ()=> {
    mostrar_filtros_general(filters)
    mostrar_menu_general(products)
})


// Mostrar filtros
function mostrarFiltros(filters) {
    document.getElementById('filters').innerHTML = filters.map(f => 
        `<button class="filter">${f}</button>`
    ).join('');
}

// Escuchar clics en los filtros
document.getElementById('filters').addEventListener('click', event => manejarFiltro(event, products));


// Evento para manejar el clic en los botones de filtro
/*document.getElementById('filters').addEventListener('click', (event) => {
    manejarFiltro(event, products);
});
*/


/*document.getElementById('filters').addEventListener('click', (event) => {
    const filtroSeleccionado = event.target.textContent


    if (filtroSeleccionado) {
        const productosFiltrados = (filtroSeleccionado === 'todos')
        ? products
        : products.filter(producto => producto.category === filtroSeleccionado);
        mostrar_menu_general(productosFiltrados);
    }

});
*/






/*document.addEventListener("click" = function(mostrar_menu_general) => {
    if (category = "ramen") {
        products.category.sushi
    },
     else if (category = "postres") {
        products.category.postres
    }, else if (category = "sushi") {
        products.category.ramen
    }
    else{

    }
})
`/*
// evento de click para el carrito 
// evento click para pagar
// evento para ver el factura
switch (mostrar_menu_general.addEventListener("click" += )) {

    case "postres":{

    }


    case "ramen":{

    }

    case "sushi":{

    }

    case "entradas":{

    }


    default:{

        }
        break;
}*/