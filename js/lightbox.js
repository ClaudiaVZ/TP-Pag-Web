/* constantes */

const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')
const hamburguer1 = document.querySelector('.hamburguer')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';            /* para cerrar el lightbox */
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0';   /* que desaparesca cuando abro el lightbox */
}