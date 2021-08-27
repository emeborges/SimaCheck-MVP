// Módulo de Slider da parte de Checks
const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// Scroll Suave Menu

const menuItems = document.querySelectorAll('.left_menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);

} )

function scrollToIdOnClick(event){
    event.preventDefault()
    const element = event.target;
    const id = element.getAttribute('href')
    const sessao = document.querySelector(id).offsetTop

    window.scroll({
        top: sessao - 80,
        behavior: "smooth",
    })
}

// Encaminha para outra pg

function redirecionamentoFilter(){
    window.location.href = "/filter.html"
}

// Scroll Suave Bottom

function rolagemSuave(event){
    event.preventDefault

    const destino = document.querySelector('#comoFunciona').offsetTop

    window.scroll({
        top: destino - 80,
        behavior: "smooth",
    })
}