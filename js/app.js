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


}
