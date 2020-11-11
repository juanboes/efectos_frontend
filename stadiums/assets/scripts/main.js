// Obtener los elementos de la clase .close

let boton_close = document.querySelectorAll(".close");

// Recorrerlos

boton_close.forEach(function(close){
    // Agregar un evento click a cada uno de ellos
    close.addEventListener('click', function(e){
        //No permite que se redireccione el link
        e.preventDefault();
        // Obtener el elemento content
        let content = document.querySelector('.content');
        // Remover clases de animación
        content.classList.remove("zoomIn");
        content.classList.remove("animated");
        // Agregar clases de animación de salida
        content.classList.add("fadeOutUp");
        content.classList.add("animated");
        // Timer
        setTimeout(function(){
            location.href="../"
        },600);
    });
});