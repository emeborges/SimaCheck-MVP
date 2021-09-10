const form = document.querySelector('#filtersMundo')


//REQUISITANDO OS DADOS
function addwords(){

    const options = {
        method: 'GET'
    }

    fetch('https://api.simacheck.com/worlds', options)
        .then( response =>{response.json()
            .then(data =>  console.log(data)
                
                    )})
        .catch(err => console.log('erro' + err,message))
}

addwords()

// ADICIONANDO AO HTML


// AO ENVIAR FORMULÁRIO

form.onsubmit = function(e){
    e.preventDefaut

    const mundoSelecionado = document.forms['#filtersMundo'].words.value

    
}
