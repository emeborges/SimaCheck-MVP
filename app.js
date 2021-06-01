
const menuItens = document.querySelectorAll('.left_menu a')

function scrollToIdOnClick(){
    event.preventDefault(); // Tira o evento padrão do Click! 
    const element = event.target; // Aqui, ele busca qual obj html é referente do evento
    const id = element.getAttribute('href'); //Busca o atributo referente ao objeto html
    const to = document.querySelector(id).offsetTop; //Ele esta localizando o ID que esta no href, e trazendo a Coordenada de tal.    

    window.scroll({
        top: to - 80,
        behavior: "smooth",
    }); // Faz o Scroll no objeto Janela até a altura obtida pela Const anterior, sobre o efeito escolhido
}

menuItens.forEach(item =>{ 
    item.addEventListener('click', scrollToIdOnClick) // Adicinando o evento de clic novamente
})