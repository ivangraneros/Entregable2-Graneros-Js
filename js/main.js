const mainIndex = document.querySelector("main");

const misProductos = productos.map(
(producto) => 
`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <p class="card-text">$${producto.precio}</p>
    <a href="./producto.html?id=${producto.id}" class="btn btn-primary boton">Ver Producto</a>
  </div>
</div>`
);

mainIndex.innerHTML = misProductos.join('');


