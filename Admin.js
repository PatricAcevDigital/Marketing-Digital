document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("productoForm");
    const listaProductos = document.getElementById("listaProductos");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const urlAfiliado = document.getElementById("urlAfiliado").value;
        const imagen = document.getElementById("imagen").value;
        const categoria = document.getElementById("categoria").value;

        const nuevoProducto = { nombre, urlAfiliado, imagen, categoria };

        fetch("productos.json")
            .then(response => response.json())
            .then(productos => {
                productos.push(nuevoProducto);
                return fetch("productos.json", {
                    method: "PUT",
                    body: JSON.stringify(productos),
                    headers: { "Content-Type": "application/json" }
                });
            })
            .then(() => {
                mostrarProductos();
                formulario.reset();
            })
            .catch(error => console.error("Error al agregar producto:", error));
    });

    function mostrarProductos() {
        fetch("productos.json")
            .then(response => response.json())
            .then(productos => {
                listaProductos.innerHTML = "";
                productos.forEach(producto => {
                    const item = document.createElement("li");
                    item.innerHTML = `<strong>${producto.nombre}</strong> - ${producto.categoria}`;
                    listaProductos.appendChild(item);
                });
            })
            .catch(error => console.error("Error cargando productos:", error));
    }

    mostrarProductos();
});
