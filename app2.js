//Variáveis utilizadas
    const $btn_filter = document.querySelector("#sendFilterMundo")



function checkInput(){
    const $mundoSelected = document.querySelector("#filtersMundo").value

    localStorage.setItem('mundo', $mundoSelected)

            if($mundoSelected === ""){
                alert("Selecione o Mundo desejado")
            } else {
                window.location.href = 'radar.html'
            }
  
}
