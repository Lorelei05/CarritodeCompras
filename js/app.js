//Variables
const carrito =  document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
    //
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
    }
}

//Leer el contenido de HTML al que le damos click y extrae la informacion del curso.
function leerDatosCurso(curso){
    console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Agrgar elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra del carrito de compras en HTML
function carritoHTML(){

    //Limpia el html
    limpiarHTML();

    //Recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${curso.titulo}
        <td>
      `;

      //Agregar el html del carrito en el tbody
      contenedorCarrito.appendChild(row)
    })
}

//elimina los cursos del tbody

function limpiarHTML(){
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.renoveChild(contenedorCarrito.firstChild)

    }
}

