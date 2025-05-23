document.addEventListener("DOMContentLoaded", function() {
    const productoForm = document.getElementById("productoForm");
    const listaProductos = document.getElementById("listaProductos");

    function cargarProductos() {
        listaProductos.innerHTML = "";
        const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
        productosGuardados.forEach((producto, index) => agregarProducto(producto, index));
    }

    productoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const imagen = document.getElementById("imagen").value;
        const urlAfiliado = document.getElementById("codigo").value;
        const categoria = document.getElementById("categoria").value;

        if (!nombre || !imagen || !urlAfiliado || !categoria) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const producto = { nombre, imagen, urlAfiliado, categoria };

        let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
        productosGuardados.push(producto);
        localStorage.setItem("productos", JSON.stringify(productosGuardados));

        agregarProducto(producto, productosGuardados.length - 1);
        productoForm.reset();
    });

    function agregarProducto(producto, index) {
        const item = document.createElement("li");

        const enlace = document.createElement("a");
        enlace.href = producto.urlAfiliado;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.width = 200;

        enlace.appendChild(imagen);
        item.appendChild(enlace);

        const nombre = document.createElement("p");
        nombre.innerHTML = `<strong>${producto.nombre}</strong>`;
        item.appendChild(nombre);

        const categoria = document.createElement("p");
        categoria.textContent = `Categoría: ${producto.categoria}`;
        item.appendChild(categoria);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            eliminarProducto(index);
        });

        item.appendChild(botonEliminar);
        listaProductos.appendChild(item);
    }

    function eliminarProducto(index) {
        let productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
        productosGuardados.splice(index, 1);
        localStorage.setItem("productos", JSON.stringify(productosGuardados));
        cargarProductos();
    }

    cargarProductos();
});