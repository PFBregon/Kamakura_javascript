import { filters, products } from '../assets/data/data.js';

//DEBE imprimir en pantalla la información de filtros.
function mostrar_filtros_general(datos) {
    // obtener el documento del dom a los filtros
    let filtros_contenedor = document.getElementById('filters');
    // recorer los datos
    let filtro_boton = "";
    datos.map(filtro => {
        filtro_boton += `<button class="filter">${filtro}</button>`
    });
    filtros_contenedor.innerHTML = filtro_boton;
}
//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
//function mostrar_menu_general(){};



//DEBE imprimir en pantalla la información de filtros.
function mostrar_menu_general(productoDato) {
    // obtener el documento del dom a los filtros
    let productos_contenedor = document.getElementById('products');
    // recorer los datos
    //DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.
    let producto_card = ""
    productoDato.map(producto => {
        producto_card += `<div class="product-container">
                    <h3>${producto.name}</h3>
                    <p>${producto.description}</p>
                    <div class="price-container">
                        <h5>${producto.price.toFixed(2)}€</h5>
                        <button class="add-button">Añadir</button>
                    </div>
                </div>`
    });
    productos_contenedor.innerHTML =  producto_card;
}
export { mostrar_filtros_general, mostrar_menu_general };
