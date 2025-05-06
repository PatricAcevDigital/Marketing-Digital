document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            alert(`Navegando a ${this.textContent}`);
        });
    });
});