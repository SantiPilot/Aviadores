var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === '/Users/SantiagoGonzalezGarces/Desktop/Desarrollos/Imagenes/avion2.jpeg') {
      miImage.setAttribute('src','/Users/SantiagoGonzalezGarces/Desktop/Desarrollos/Imagenes/avion2.jpeg');
    } else {
      miImage.setAttribute('src', '/Users/SantiagoGonzalezGarces/Desktop/Desarrollos/Imagenes/avion2.jpeg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Los Aviones son el mejor invento del mundo,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Los Aviones son el mejor invento del mundo,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}