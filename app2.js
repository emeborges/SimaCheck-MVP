//Variáveis utilizadas
    const $btn_filter = document.querySelector("#sendFilterMundo")
    const $select = document.querySelector("#verification")



function checkInput(){
    const $mundoSelected = document.querySelector("#filtersMundo").value

    localStorage.setItem('mundo', $mundoSelected)

            if($mundoSelected === ""){
                $select.classList.add(".nopreench")
                alert("Selecione o Mundo desejado")
            } else {
                window.location.href = 'radar.html'
            }
  
}
