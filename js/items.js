const params = new URLSearchParams(window.location.search);
const productoId = params.get('id');


const items = productos.find((item) => item.id === Number(productoId));

const titulo = document.querySelector('h3');

titulo.textContent = items.nombre;

const descripcion = document.querySelector('.card-text');

descripcion.textContent = items.descripcion;

const precio = document.querySelector('.card-text:last-of-type');
precio.textContent = `Precio: $${items.precio.toLocaleString('es-CL')}`;

const imagen = document.querySelector('.img-fluid');
imagen.src = items.imagen;