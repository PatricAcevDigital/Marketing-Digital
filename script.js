document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");

    // Manejo del formulario
    document.getElementById("productoForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío automático
        alert("Producto agregado correctamente.");
    });

    // Manejo de enlaces del menú de navegación
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
       
    });
});document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            alert(`Navegando a ${this.textContent}`);
        });
    });
});
