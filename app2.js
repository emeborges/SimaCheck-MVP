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

    const $btnAdd = document.querySelector('#sendFilterMundo');
    const $char = document.querySelector('#charAdicionado')

    $btnAdd.addEventListener("click", function(e){
        
        let search = $char.value.replace(" ","+")
        console.log(search)

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://api.tibiadata.com/v2/characters/${search}.json`, options)
            .then( response =>{response.json()
                .then(data => { testando(data)
                    }
                        )})
            .catch(e => console.log('erro' + e,message))

    })


function testando(data){
    console.log(data)
    const nameChar = data.characters.data.name
    const worldChar = data.characters.data.world
    const vocacChar = data.characters.data.vocation
    const levelChar = data.characters.data.level
    const divIncluir = document.querySelector(".characters")

    divIncluir.innerHTML += `
                            <div class="char">
                                <input type="radio" value="${worldChar}" name="char" id="texte1">
                                    <label for="texte1" >
                                        <h5>${nameChar}</h5>
                                        <p>${vocacChar}</p>
                                        <p>${worldChar}</p>
                                        <p>${levelChar}</p>
                                        <img src="./img/profs/Outfit_Druid_Female_Addon_3.gif" alt="">
                                        
                                    </label>
                            </div>
                                `
    // const sexoChar = data.characters.data.sex

    

    
}

