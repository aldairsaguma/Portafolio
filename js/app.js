window.onload = function(){
    //Abrir botón whatsapp
    const whatsapp = document.getElementById("icon-whatsapp");
    whatsapp.addEventListener("click",function(e){
        this.parentElement.classList.toggle("whatsapp-button-active");
    });

    //Desplegar menu mobile
    const navbarMobile = document.getElementById("navbar-mobile");-
    navbarMobile.addEventListener("click",function(e){
        this.parentElement.parentElement.nextElementSibling.classList.toggle("nav-header-show");
        document.getElementById("menu-background").classList.toggle("menu-background-view");
    });

    //Cerrar menú mobile por medio de fondo
    const menuBackground = document.getElementById("menu-background");
    menuBackground.addEventListener("click",function(e){
        this.classList.remove("menu-background-view");
        document.getElementById("nav-header").classList.remove("nav-header-show");
    });

    //Modal para imagenes en trabajos.html

    //Obtenemos el ID del modal
    const modal = document.getElementById("mymodal");

    //Obtenemos la imagen y la insertamos adentro del modal
    let viewImagen = document.getElementsByClassName("view-image");

    let img = document.getElementsByClassName("my-img");
    const modalImg = document.getElementById("modal-img");
    let captionText = document.getElementById("caption");

    //For para muchas clases
    for(let i = 0; i < viewImagen.length; i++){
        viewImagen[i].addEventListener("click",function(){
        // viewImagen.addEventListener("click",function(){
            modal.style.display="block";
            modalImg.src = this.parentElement.parentElement.nextElementSibling.src;
            captionText.innerHTML = this.parentElement.parentElement.nextElementSibling.alt; 
        });
    }

}
