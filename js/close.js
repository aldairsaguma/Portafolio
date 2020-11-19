window.onload = function(){
    //Obtenemos la clase de la etiqueta span para cerrar la el modal
    let spanClose = document.querySelector(".close");
    spanClose.addEventListener("click",function(){
        modal.style.display="none";
    });
}