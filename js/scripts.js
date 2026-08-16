/**
 * Memoria y Resiliencia Personal
 * Lógica de interactividad para el curso
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DEL ACORDEÓN ---
    var acc = document.getElementsByClassName("acordeon-btn");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Alterna la clase 'active' para cambiar el estilo del botón cuando está abierto
            this.classList.toggle("active");

            // Selecciona el panel de contenido que le sigue inmediatamente al botón
            var panel = this.nextElementSibling;
            
            // Si el panel ya tiene una altura máxima (está abierto), lo cierra.
            // Si no tiene altura (está cerrado), calcula su tamaño y lo abre.
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.borderBottom = "none";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.borderBottom = "1px solid #e2e8f0";
            } 
        });
    }
});
