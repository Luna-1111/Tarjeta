document.getElementById('editarBtn').addEventListener('click', function() {
    let nuevoNombre = prompt("Ingrese el nuevo nombre:", document.getElementById('nombre').textContent);
    let nuevoPuesto = prompt("Ingrese el nuevo puesto:", document.getElementById('puesto').textContent);

    if (nuevoNombre) {
        document.getElementById('nombre').textContent = nuevoNombre;
    }

    if (nuevoPuesto) {
        document.getElementById('puesto').textContent = nuevoPuesto;
    }
});