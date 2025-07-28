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
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <p>Cantidad: ${producto.cantidad}</p>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
      <hr>
    `;
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
