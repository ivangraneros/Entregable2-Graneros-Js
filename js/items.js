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


document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".agregar-carrito");

  boton.dataset.id = items.id;
  boton.dataset.nombre = items.nombre;
  boton.dataset.precio = items.precio;
  boton.dataset.imagen = items.imagen;


  boton.addEventListener("click", () => {
    const producto = {
        id: boton.dataset.id,
        nombre: boton.dataset.nombre,
        precio: boton.dataset.precio,
        imagen: boton.dataset.imagen,
        cantidad: 1
    };
   
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
      existe.cantidad++;
    } else {
      carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    
// Mostrar mensaje de agregado al carrito
const toastMensaje = document.querySelector('.toastCarrito');
toastMensaje.querySelector('.toast-body').textContent = `${producto.nombre} fue agregado al carrito ✅`;
const toast = new bootstrap.Toast(toastMensaje);
toast.show();
  
  });
});



