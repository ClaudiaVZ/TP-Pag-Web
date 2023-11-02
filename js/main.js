/* Desplazamiento scroll en la pag*/

let ubicacionPrincipal = window.scrollY;     // inicialmente se establece en 0

  AOS.init();                               // efectos de animacion

  window.addEventListener("scroll", function(){      // se activa un evento cuando se hace scroll
    if(ubicacionPrincipal >= desplazamientoActual){ // se comparan las posiciones (principal/actual) para saber si va hacia arriba o abajo 200 > 180
    let desplazamientoActual = window.scrollY;     // se almacana la posicion inicial de desplazamiento 180
        document.getElementsByTagName("menu-navegacion")[0].style.top = "0px"  // Hacia arriba se muestra el menu
    }else{
        document.getElementsByTagName("menu-navegacion")[0].style.top = "-100px"  // Hacia abajo se oculta
    }
    ubicacionPrincipal= desplazamientoActual; // Se actualiza la ubicacion 200  y vuelve a repetirse

})

// Efecto de Menu desplegable

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
}) 

// "menudos" muestra u oculta una lista de enlaces cuando se hace click sobre el elemento de clase hamburguer. semaforo se usa para alternar colores. 