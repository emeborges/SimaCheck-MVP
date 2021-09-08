
    const $btnAdd = document.querySelector('#btn');
    const $char = document.querySelector('#txt')

    $btnAdd.addEventListener("click", function(e){
        const qtdeList = document.querySelectorAll('#listChares .chares').length
        const aviso = document.querySelector('.aviso')

        if(qtdeList >= 3)
        aviso.innerHTML = `<p> Limite máximo de chares adicionado <p>`
        else
        addcharacter()
        

    })

//API QUE BUSCA O NOME DO CHAR
function addcharacter(){
    //TRANSFORMA O NOME DIGITADO COM ESPAÇO PARA O NOME DIGITADO COM +
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
}

// BUSCANDO DADOS DENTRO DO 'DATA' RESULTADO DA API
function testando(data){
    console.log(data)
    const nameChar = data.characters.data.name
    const worldChar = data.characters.data.world
    const vocacChar = data.characters.data.vocation
    const levelChar = data.characters.data.level
    const divIncluir = document.querySelector("#listChares")
    const qtdeList = document.querySelectorAll('#listChares .chares').length

    divIncluir.innerHTML += `
                            <div class="chares">
                                <div class="imgChar">
                                    <img src="/img/profs/Outfit_Druid_Male_Addon_3.gif" alt="">
                                </div>
                                <div class="infosChar">
                                    <h5>${nameChar}</h5>
                                    <h6>Level ${levelChar}</h6>
                                    <h6>${vocacChar}</h6>
                                </div>
                                <div class="infosMundo">
                                    <h5>${worldChar}</h5>
                                </div>
                                <div class="delete">
                                    <input type="button" value="x">
                                </div>
                            </div>
                                `
    
        // INCLUINDO OS DADOS DO PERSONAGEM NO LOCALSTORAGE
    localStorage.setItem(`charName${qtdeList}`, nameChar)
    localStorage.setItem(`charMundo${qtdeList}`, worldChar)
    localStorage.setItem(`charVocac${qtdeList}`, vocacChar)
    localStorage.setItem(`charLvl${qtdeList}`, levelChar)
}

