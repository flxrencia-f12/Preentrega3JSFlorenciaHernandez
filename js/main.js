document.addEventListener('DOMContentLoaded', () => {

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {
        id: "Planta-1",
        titulo: "Potus Lemon",
        precio: 14000,
        img: "./img/plant.jpg",
    },
    {
        id: "Planta-2",
        titulo: "Aglaonema",
        precio: 9000,
        img: "./img/plant13.jpg",
    },
    {
        id: "Planta-3",
        titulo: "Zamioculca",
        precio: 17000,
        img: "./img/plant14.jpg",
    },
    {
        id: "Planta-4",
        titulo: "Dieffebanchia",
        precio: 9500,
        img: "./img/plant2.jpg",
    },
   
    {
        id: "Planta-5",
        titulo: "Philodendron Xanadu",
        precio: 11000,
        img: "./img/plant6.jpg",
    },
    {
        id: "Planta-6",
        titulo: "Ficus Elastica",
        precio: 12000,
        img: "./img/plant6.jpg",
    },
    {
        id: "Planta-7",
        titulo: "Monstera",
        precio: 65000,
        img: "./img/monstera.jpg",
    },
    {
        id: "Planta-8",
        titulo: "Begonia",
        precio: 6000,
        img: "./img/plant8.jpg",
    }
]


const contenedorProductos = document.querySelector("#compra");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total #total");



productos.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("planta");
    div.innerHTML = `
    <img class="producto-img" src=${producto.img}>
    <h3>${producto.titulo}</h3>
    <p>$${producto.precio}</p>

   `;

   let button = document.createElement("button");
   button.classList.add("producto-btn");
   button.innerText = "Agregar al carrito";
   button.addEventListener("click", () => {
    agregarAlCarrito(producto);
   });

   div.append(button);
   contenedorProductos.append(div);

    
});

function actualizarCarrito() {
    carritoProductos.innerHTML = '';
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");

        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <h3>${producto.titulo}</h3>
            <p>${producto.precio}</p>
            <p>Cant: ${producto.cantidad}</p>
            <p>Subt: ${producto.precio * producto.cantidad}</p>
            `;

let button = document.createElement("button");
button.classList.add("carrito-producto-btn");
button.innerText = "❌";
button.addEventListener("click", () => {
    borrarDelCarrito(producto)
});

div.append(button);
carritoProductos.append(div);

        });

    }
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto) {
    let itemEncontrado = carrito.find((item) => item.id === producto.id);

    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
    carrito.push({...producto, cantidad: 1});
    }

    actualizarCarrito();
    actualizarTotal();


}



function borrarDelCarrito(producto) {
let indice = carrito.findIndex((item) => item.id === producto.id);
if (indice !== -1) {
carrito.splice(indice, 1);

}

actualizarCarrito();
actualizarTotal();
}

function actualizarTotal() {
    let total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    document.getElementById("carrito-total").innerText = `$${total.toFixed(2)}`;
}

actualizarCarrito();

});