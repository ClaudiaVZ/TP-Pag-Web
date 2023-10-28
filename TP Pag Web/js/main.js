/* ESTO HAY QUE ARREGLAR*/
/*sobre desplazamiento scroll en la pag*/

/*let ubicacionPrincipal = window.scrollY; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.scrollY; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nenu-navegacion")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("naenu-navegacion")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})+/