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

// ADICIONANDO AO HTML

addwords()