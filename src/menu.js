

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
function mostrar_productos(productos) {
        
    let mostrar_productos = document.getElementById('products');
    let filtro_productos= "" ;
    productos.map(platos => {
        filtro_productos += `<div class="product-container">
                    <h3>${platos.name}</h3>
                    <p>${platos.description}</p>
                    <div class="price-container">
                        <h5>${platos.price} €</h5>
                        <button class="add-button">Añadir</button>
                    </div>

                </div>`
    });
    
    mostrar_productos.innerHTML = filtro_productos;
}; 



export {mostrar_filtros_general, mostrar_productos};


