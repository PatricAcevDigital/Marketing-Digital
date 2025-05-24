document.addEventListener("DOMContentLoaded", function() {
    const listaProductos = document.getElementById("listaProductos");

    fetch("productos.json")
        .then(response => response.json())
        .then(productos => {
            listaProductos.innerHTML = "";
            productos.forEach(producto => {
                const item = document.createElement("div");
                item.classList.add("producto");

                const enlace = document.createElement("a");
                enlace.href = producto.urlAfiliado;
                enlace.target = "_blank";
                enlace.rel = "noopener noreferrer";

                const imagen = document.createElement("img");
                imagen.src = producto.imagen;
                imagen.alt = producto.nombre;

                const nombre = document.createElement("p");
                nombre.textContent = producto.nombre;

                const reseña = document.createElement("p");
                reseña.classList.add("reseña");
                reseña.textContent = producto.reseña;

                enlace.appendChild(imagen);
                item.appendChild(enlace);
                item.appendChild(nombre);
                item.appendChild(reseña);

                listaProductos.appendChild(item);
            });
        })
        .catch(error => console.error("Error cargando productos:", error));
});
