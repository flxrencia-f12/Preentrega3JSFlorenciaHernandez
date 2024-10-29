document.addEventListener('DOMContentLoaded', () => {

    

let productos = [];
   


fetch("./js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    cargarProductos(productos);

}
    
)

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-btn");
const numerito = document.querySelector("#numerito");







function cargarProductos(productosSeleccionados) {

    contenedorProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("planta");
        div.innerHTML = `
        <div class="planta" id="${producto.id}">
        <img class="producto-img" src=${producto.img}>
        <h3>${producto.titulo}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="producto-btn" id="${producto.id}">Agregar al carrito</button>
        </div>
    
    
       `;

       contenedorProductos.append(div);

    })

    actualizarBotonesAgregar();
}

 

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productosSeleccionados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosSeleccionados);
          } else {
            cargarProductos(productos);
          }

        
    });
 });

 function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-btn");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });

 }

 let productosEnCarrito;


 
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
 

 if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
 } else {
    productosEnCarrito = [];
 }

 function agregarAlCarrito(e) {
    Toastify({
        text: "Agregado a la tienda!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, rgb(180, 177, 216), black)",
        },
        onClick: function(){} // 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        actualizarNumerito();
    }

   function actualizarNumerito() {
    const totalProductos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = totalProductos;
   }
   actualizarNumerito();
});



    




 
       
    
    

 



