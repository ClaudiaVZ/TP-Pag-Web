const hamburguer = document.querySelector('.hamburguer') /* verificar la clase en html */
const menu = document.querySelector('.menu-navegacion')

/* creamos un evento del tipo click */
hamburguer.addEventListener('click', ()=>{  /* funcion de flecha */
    menu.classList.toggle("spread")  
})

window.addEventListener('click', e =>{     /* poner o quitar la clase spread, dependiendo de si la tiene o no */
    if(menu.classList.contains('spread')   /* si el menu.classlist, tiene la clase "spread" quiero q se ejecute este codigo */                                                                                                                                    
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})  /* con esta funcion cierra o abre el menu-nav, desde cualq parte, menos de menu ni hamburguer */