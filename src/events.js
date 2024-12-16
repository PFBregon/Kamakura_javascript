import {filters} from "../assets/data/data.js";
import {mostrar_filtros_general} from "../src/menu.js";
// evento para filtros
// evento para productos
document.addEventListener("DOMContentLoaded", ()=> {
    console.log(mostrar_filtros_general(filters));
})
// evento de click para el carrito 
// evento click para pagar
// evento para ver el factura