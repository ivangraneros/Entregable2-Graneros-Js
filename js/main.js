const mainIndex = document.querySelector("main");


// fetch de productos con mockApi, lo cambie por el array de productos

fetch('https://68a3aa7ec123272fb9b02a07.mockapi.io/products/')
  .then(response => response.json())
  .then(productos => { productos.forEach(p => {
    mainIndex.innerHTML +=
  `<div class="card" style="width: 18rem;">
  <img src="${p.imagen}" class="card-img-top imagen" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title producto">${p.name}</h5>
    <p class="card-text">${p.description}</p>
    <p class="card-text">$${p.precio}</p>
    <a href="./producto.html?id=${p.id}" class="btn btn-primary boton">Ver Producto</a>
  </div>
</div>`;
})})
  .catch(error => console.error(error));
  