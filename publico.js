document.addEventListener("DOMContentLoaded", function() {
    const listaProductos = document.getElementById("listaProductos");

    fetch("productos.json")
        .then(response => response.json())
        .then(productos => {
            listaProductos.innerHTML = "";
            productos.forEach(producto => {
                const item = document.createElement("li");

                const enlace = document.createElement("a");
                enlace.href = producto.urlAfiliado; // Enlace al vendedor
                enlace.target = "_blank"; // Abre en nueva pestaña
                enlace.rel = "noopener noreferrer"; // Seguridad

                const imagen = document.createElement("img");
                imagen.src = producto.imagen;
                imagen.alt = producto.nombre;
                imagen.width = 100; // Tamaño compacto

                enlace.appendChild(imagen);
                item.appendChild(enlace);

                const nombre = document.createElement("p");
                nombre.innerHTML = `<strong>${producto.nombre}</strong>`;
                item.appendChild(nombre);

                listaProductos.appendChild(item);
            });
        })
        .catch(error => console.error("Error cargando productos:", error));
});
