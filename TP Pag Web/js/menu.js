const hamburguer = document.querySelector('.hamburguer')     /* icono de la hamburguesa que se utiliza para abrir y cerrar el menú desplegable */
const menu = document.querySelector('.menu-navegacion')

/* evento del tipo click */
hamburguer.addEventListener('click', ()=>{  /* funcion de flecha: clic en cualquier parte fuera del menú o del icono de hamburguesa, el menú se cierra.  */
    menu.classList.toggle("spread")  
})

window.addEventListener('click', e =>{     /* poner o quitar la clase spread, dependiendo de si la tiene o no */
    if(menu.classList.contains('spread')   /* si el menu.classlist, tiene la clase "spread" quiero q se ejecute este codigo */                                                                                                                               
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})                                           /* La clase "spread" generalmente se utiliza para controlar la visibilidad del menú desplegable. */