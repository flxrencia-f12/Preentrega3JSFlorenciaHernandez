document.addEventListener('DOMContentLoaded', () => {

    

const productos = [
    {
        id: "planta-1",
        titulo: "Potus Lemon",
        img: "./img/plant.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
         precio: 14000
    },
    {
        id: "planta-2",
        titulo: "Aglaonema",
        img: "./img/plant13.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
         precio: 9000
    },
    {
        id: "planta-3",
        titulo: "Zamioculca",
        img: "./img/plant14.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
        precio: 17000
    },
    {
        id: "planta-4",
        titulo: "Dieffebanchia",
        img: "./img/plant2.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
        precio: 9500
    },
   
    {
        id: "planta-5",
        titulo: "Philodendron Xanadu",
        img: "./img/plant6.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
        precio: 11000
    },
    {
        id: "planta-6",
        titulo: "Ficus Elastica",
        img: "./img/plant6.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
        precio: 12000
    },
    {
        id: "planta-7",
        titulo: "Monstera",
        img: "./img/monstera.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
        precio: 65000
    },
    {
        id: "planta-8",
        titulo: "Begonia",
        img: "./img/plant8.jpg",
        categoria: {
            nombre: "Plantas",
            id: "plantas"
        },
        precio: 6000
    },
    {
        id: "maceta-1",
        titulo: "Maceta angel",
        img: "./img/maceta1.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 15000
    },
    {
        id: "maceta-2",
        titulo: "Maceta smoke",
        img: "./img/maceta2.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 20000
    },
    {
        id: "maceta-3",
        titulo: "Maceta vmv",
        img: "./img/maceta3.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 25000
    },
    {
        id: "maceta-4",
        titulo: "Maceta devil",
        img: "./img/maceta4.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 15000
    },
    {
        id: "maceta-5",
        titulo: "Maceta strange",
        img: "./img/maceta5.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 30000
    },
    {
        id: "maceta-6",
        titulo: "Maceta bucle",
        img: "./img/maceta6.jpg",
        categoria: {
            nombre: "Macetas",
            id: "macetas"
        },
        precio: 30000
    }
];


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

 cargarProductos(productos);

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
 

 const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

 if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
 } else {
    productosEnCarrito = [];
 }

 


 function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = { ...productos.find(producto => producto.id === idBoton) };

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        actualizarNumerito();
    }

   function actualizarNumerito() {
    const totalProductos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        numerito.innerText = totalProductos;
   }
   actualizarNumerito();
});



    




 
       
    
    

 



