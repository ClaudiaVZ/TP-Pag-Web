/* constantes */

const imagenes = document.querySelectorAll('.img-galeria')          /* miniaturas de las imágenes que quieres mostrar en el lightbox */
const imagenLight = document.querySelector('.agregar-imagen');      /* contenedor de la imagen grande que se mostrará en el lightbox */
const contenedorLight = document.querySelector('.imagen-light')     /* contenedor del lightbox que muestra la imagen ampliada */
const closeLight = document.querySelector('.close')                 /* botón de cierre del lightbox */
const hamburguer1 = document.querySelector('.hamburguer')           /* ocultar o mostrar botón del menú */


imagenes.forEach(imagen => {                                        /* Evento de clic a cada imagen en la galería */
    imagen.addEventListener('click',()=>{                          
        aparecerImagen(imagen.getAttribute('src'));                 
    })
});

contenedorLight.addEventListener('click',(e)=>{                     /*  evento de clic al contenedor del lightbox */
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';            
    }
})


const aparecerImagen = (imagen)=>{                                  
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0';      
}

/*  hace que el lightbox se muestre estableciendo las clases show y showImage en contenedorLight e imagenLight, respectivamente. También hace que el botón de menú hamburguesa se desvanezca al establecer su opacidad en 0 */