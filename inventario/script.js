// Arreglo para almacenar los productos
let inventario = [];

// Función para agregar un producto
function agregarProducto() {
    const nombre = document.getElementById('nombreProducto').value.trim();
    const cantidad = parseInt(document.getElementById('cantidadProducto').value);

    // Verificar si el producto ya existe
    const productoExistente = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (productoExistente) {
        alert(`El producto '${nombre}' ya existe. Puedes actualizar su cantidad.`);
        return;
    }

    // Agregar nuevo producto al inventario
    inventario.push({ nombre, cantidad });
    mostrarProductos();
    limpiarInputs();
}

// Función para mostrar todos los productos
function mostrarProductos() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = ''; // Limpiar la lista

    // Verificar si el inventario está vacío
    if (inventario.length === 0) {
        listaProductos.innerHTML = '<tr><td colspan="2" class="text-center">El inventario está vacío.</td></tr>';
    } else {
        // Mostrar productos en el inventario
        inventario.forEach(producto => {
            listaProductos.innerHTML += `<tr>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
            </tr>`;
        });
    }
}

// Función para actualizar la cantidad de un producto
function actualizarProducto() {
    const nombre = document.getElementById('nombreActualizar').value.trim();
    const nuevaCantidad = parseInt(document.getElementById('nuevaCantidad').value);

    // Buscar el producto y actualizar la cantidad
    const producto = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    if (producto) {
        producto.cantidad = nuevaCantidad;
        mostrarProductos();
        limpiarInputs();
    } else {
        alert(`El producto '${nombre}' no existe en el inventario.`);
    }
}

// Función para eliminar productos sin stock
function eliminarSinStock() {
    inventario = inventario.filter(producto => producto.cantidad > 0);
    mostrarProductos();
}

// Función para limpiar los inputs después de agregar o actualizar
function limpiarInputs() {
    document.getElementById('nombreProducto').value = '';
    document.getElementById('cantidadProducto').value = '';
    document.getElementById('nombreActualizar').value = '';
    document.getElementById('nuevaCantidad').value = '';
}

// Inicializar la lista de productos vacía
mostrarProductos();
