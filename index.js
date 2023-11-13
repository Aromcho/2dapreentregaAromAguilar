//array para meter los productas
let inventario = [];

//Función para meter producto en el inventario
function agregarProducto() {
    let marca = prompt("Ingrese la marca del zapato:");
    let talle = prompt("Ingrese el talle del zapato:");
    let color = prompt("Ingrese el color del zapato:");

    //info del producto
    let producto = {
        marca: marca,
        talle: talle,
        color: color
    };
    inventario.push(producto);

    alert("Producto agregado al inventario");
}

//Funcion pa buscar productos por marca
function buscarPorMarca() {
    let marcaBuscada = prompt("Ingrese la marca a buscar:");
    
    //Filtros
    let productosEncontrados = inventario.filter(function(producto) {
        return producto.marca.toLowerCase() === marcaBuscada.toLowerCase();
    });
    let resultados = "Productos encontrados con la marca " + marcaBuscada + ":\n";

    for (let i = 0; i < productosEncontrados.length; i++) {
        resultados += "Marca: " + productosEncontrados[i].marca + ", Talle: " + productosEncontrados[i].talle + ", Color: " + productosEncontrados[i].color + "\n";
    }

    alert(resultados);
}

//Función pa mostrar el inventario completo
function mostrarInventario() {
    let inventarioCompleto = "Inventario completo:\n";

    for (let i = 0; i < inventario.length; i++) {
        inventarioCompleto += "Marca: " + inventario[i].marca + ", Talle: " + inventario[i].talle + ", Color: " + inventario[i].color + "\n";
    }

    alert(inventarioCompleto);
}

//inicio
while (true) {
    let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Buscar por marca\n3. Mostrar inventario\n4. Salir");

    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            buscarPorMarca();
            break;
        case "3":
            mostrarInventario();
            break;
        case "4":
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Por favor, ingrese un número del 1 al 4.");
            break;
    }
}