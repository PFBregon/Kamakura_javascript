

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
function mostrar_menu_general() {
    
};
export {mostrar_filtros_general};