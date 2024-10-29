
    let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
    productosEnCarrito = JSON.parse(productosEnCarrito);
   

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contendedorCarritoProductos = document.querySelector("#contenedor-carrito-productos");
const contendorCarritoAcciones = document.querySelector("#carrito-acciones");
const contendorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#vaciar-carrito");
constContenedorTotal = document.querySelector("#total");



function cargarProductosAlCarrito() {
    if (productosEnCarrito && productosEnCarrito.lenght > 0) {
        

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contendedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <div class="carrito-producto">
            <img class="carrito-producto-imagen" src="${producto.img} alt="${producto.titulo}>
                        <div class="carrito-producto-titulo">
                            <small>Titulo</small>
                            <h3>${producto.titulo}</h3>
                       </div>

                       <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                       </div>

                       <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>${producto.precio}</p>
                       </div>

                       <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>${producto.precio * producto.cantidad}</p>
                       </div>

                       <button class="carrito-producto-eliminar" id="${producto.eliminar}"><i class="bi bi-trash"></i></button>
                       </div>

                    
            `;

            contendedorCarritoProductos.append(div);
        })
            
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");

    }

    actualizarBotonesEliminar();
    actualizarTotal();


}

cargarProductosAlCarrito();
    

    

       
    function actualizarBotonesEliminar() {
        botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    
        botonesEliminar.forEach(boton => {
            boton.addEventListener("click", eliminarDelCarrito);
    
        });
    
     }

     function eliminarDelCarrito(e) {
        let idBoton = e.currentTarget.id;
        
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito.splice(index, 1);
        cargarProductosAlCarrito();

        localStorage.setItem("#productos-en-carrito", JSON.stringify(productosEnCarrito));
     }

     function actualizarTotal() {
        const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * precio.cantidad), 0);
    total.innerText = `$${totalCalculado}`;

}

     botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.lenght = 0;
    localStorage.setItem("#productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosAlCarrito();
}

   
      
      
       