//Variables
const carrito =  document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListener();
function cargarEventListener(){
    //
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones
function agregarCurso(e){
    e.preventDefaul();
    if(e.target.classList.contains('agregar-carrito')){
    console.log (e.target);
    }
}
