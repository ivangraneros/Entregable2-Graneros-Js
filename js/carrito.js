document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
});

function mostrarCarrito() {
  const contenedor = document.querySelector(".contenedor-carrito");
  const total = document.querySelector(".total");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  contenedor.innerHTML = "";
  let sumaTotal = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    total.textContent = "";
    return;
  }

  carrito.forEach((producto, index) => {
    sumaTotal += producto.precio * producto.cantidad;

    const div = document.createElement("div");
    div.innerHTML = ` 
    <div class="card-carrito w-75 mb-3">
      <div class="card-body-carrito">
        <h5 class="card-title-carrito">${producto.nombre}</h5>
        <p class="card-text-carrito">Precio: $${producto.precio}</p>
        <p class="card-text-carrito">Cantidad: ${producto.cantidad}</p>
        <a href="#" class="boton-carrito" onclick="eliminarProducto(${index})">Eliminar</a>
      </div> 
    </div>
    <hr>`
    ;

    contenedor.appendChild(div);
  });

  total.textContent = `Total: $${sumaTotal}`;
}

function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

