const params = new URLSearchParams(window.location.search);
const productoId = params.get('id');


// (dejo esto por las dudas pero ya no se usa)
/*const items = productos.find((item) => item.id === Number(productoId));*/


// fetch para la card de producto

fetch(`https://68a3aa7ec123272fb9b02a07.mockapi.io/products/${productoId}`)
.then(response => response.json())
.then(item => {

const titulo = document.querySelector('h3');
titulo.textContent = item.name;

const descripcion = document.querySelector('.card-text');
descripcion.textContent = item.description;

const precio = document.querySelector('.card-text:last-of-type');
precio.textContent = `Precio: $${item.precio.toLocaleString('es-CL')}`;

const imagen = document.querySelector('.img-fluid');
imagen.src = item.imagen;



  const boton = document.querySelector(".agregar-carrito");
  boton.dataset.id = item.id;
  boton.dataset.name = item.name;
  boton.dataset.precio = item.precio;
  boton.dataset.imagen = item.imagen;


  boton.addEventListener("click", () => {
    const producto = {
        id: boton.dataset.id,
        nombre: boton.dataset.name,
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
  
    })
  })

  .catch(error => console.error(error));


  // Toastify

  document.querySelector(".boton-agregar").addEventListener("click", () => {

  Toastify({

    text: "Producto agregrado al carrito ✅",
    duration: 3000,
    gravity: "top",
    position: "right",
      style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    color: "white",
    fontWeight: "bold",
    padding: "20px",
    borderRadius: "5px",
    marginTop: "60px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  }

  }).showToast();

  });




