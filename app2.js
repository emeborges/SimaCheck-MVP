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

// CONSULTADO LOCAL STORAGE E ADICIONANDO CHARES

const charOne = localStorage.getItem('charName0') 
const lvlOne = localStorage.getItem('charLvl0') 
const mundoOne = localStorage.getItem('charMundo0') 
const profOne = localStorage.getItem('charVocac0') 
const localAdd = document.querySelector('.characters')


if(charOne === undefined, charOne === null)
localAdd.innerHTML = '<p>Você ainda não tem personagens adicionados, clique  <a href="/addchar.html">AQUI</a> para adicionar</p>'
else
localAdd.innerHTML = `<div class="char">
                        <input type="radio" name="char" id="texte1" value="${mundoOne}">
                        <label for="texte1" >
                            <h5>${charOne}</h5>
                            <p>${profOne}</p>
                            <p>${lvlOne}</p>
                            <p>${mundoOne}</p>
                            
                            <img src="./img/profs/Outfit_Druid_Female_Addon_3.gif" alt="">
                            
                        </label>

                        
                        </div>
`