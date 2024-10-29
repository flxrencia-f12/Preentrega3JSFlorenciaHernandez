
    const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
   

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contendedorCarritoProductos = document.querySelector("#contenedor-carrito-productos");
const contendorCarritoAcciones = document.querySelector("#carrito-acciones");
const contendorCarritoComprado = document.querySelector("#carrito-comprado");

contendedorCarritoProductos.innerHTML = "";

    if (productosEnCarrito) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");

            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen} alt="${producto.titulo}>
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

                    
            `;
            contendedorCarritoProductos.append(div);
        })
            
        });

       




      
      
       