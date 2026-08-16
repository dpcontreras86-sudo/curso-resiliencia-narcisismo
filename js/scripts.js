// Este script hace que el acordeón se abra y se cierre

document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("acordeon-btn");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Alterna la clase 'active' para cambiar el color del botón
            this.classList.toggle("active");

            // Selecciona el panel que está inmediatamente después del botón
            var panel = this.nextElementSibling;
            
            // Si el panel tiene altura, lo cierra. Si no, lo abre.
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
