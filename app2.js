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

<<<<<<< HEAD
addwords()

// ADICIONANDO AO HTML


// AO ENVIAR FORMULÁRIO

form.onsubmit = function(e){
    e.preventDefaut

    const mundoSelecionado = document.forms['#filtersMundo'].words.value

    
}
=======
// ADICIONANDO AO HTML

addwords()
>>>>>>> e63887d2041908eb5941401a824d9ebffdb80a00
