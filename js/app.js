window.onload = function(){
    const whatsapp = document.getElementById("icon-whatsapp");
    whatsapp.addEventListener("click",function(e){
        this.parentElement.classList.toggle("whatsapp-button-active");
    });
}
// document.getElementById("icon-whatsapp").addEventListener("click",function(e){
//     alert('prueba');
// });