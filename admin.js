<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administración de Productos</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <header>
        <h1>Gestión de Productos</h1>
    </header>

    <section id="admin">
        <form id="productoForm">
            <input type="text" id="nombre" placeholder="Nombre del producto" required>
            <input type="url" id="urlAfiliado" placeholder="URL de divulgación" required>
            <input type="url" id="imagen" placeholder="URL de la imagen" required>
            <input type="text" id="categoria" placeholder="Categoría" required>
            <button type="submit">Agregar Producto</button>
        </form>

        <h2>Lista de Productos</h2>
        <ul id="listaProductos"></ul>
    </section>

    <script src="admin.js"></script>
</body>
</html>
