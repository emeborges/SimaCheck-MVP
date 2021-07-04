//Efeito de rolagem lenta Links Menu, home
const menuItens = document.querySelectorAll('.left_menu a') // Click e direcionamento suave para o resto da tela.

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

//Efeito de rolagem lenta, botão Home One 

function rolagemSuave (){
    const referenciaTo = document.querySelector('#comoFunciona').offsetTop;
    const rept = window.scroll({
                    top: referenciaTo - 80,
                    behavior: "smooth",
                    });

    buttonHomeComoFunc.addEventListener('click', rept)
}

//Funcoes de Direcionamento Para Outras Pages
function redirecionamentoFilter (){
    window.location.href = 'filter.html';
} // redirecionamento do index para a selecao

function redirecionamentoRadar (){
    const mundoselecionado = document.querySelector("#selectWord").value
    const localMundo = document.querySelector(".mundo")

    if(mundoselecionado === ""){
        alert("Selecione o Mundo desejado")
    } else {
        window.location.href = 'radar.html'
    }
}