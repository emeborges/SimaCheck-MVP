const Main = {
    
                    // opção para iniciar a operação
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },

                    // função com objetivo de selecionar os itens do html
    cacheSelectors: function(){
        this.$data = document.querySelector(".database")
        this.$word = document.querySelector(".mundo")

    },

                    // função com objetivo de nomeclaturar os eventos que irão ocorrer
    bindEvents: function(){
        this.DataAtualizada =  new Date()
        
        this.$data.innerHTML = `
        <h5>Data Base:</h5> <h6>${this.DataAtualizada.toLocaleDateString()}</h6> `

        this.WordSelected = localStorage.getItem('mundo')

        this.$word.innerHTML = `
        <h5>Server:</h5> <h6>${this.WordSelected}</h6>`
    },

    Events: {
        btnFilter_onclick: function(e){ 
            this.$mundoselecionado = document.querySelector("#selectWord").value
            this.localMundo = document.querySelector(".mundo")
            this.btnFilterOk = document.querySelector("#sendFilterMundo")
            const mundoselecionado = document.querySelector("#selectWord").value
            const localMundo = document.querySelector(".mundo")
            
            localStorage.setItem('mundo', mundoselecionado)

            if(mundoselecionado === ""){
                alert("Selecione o Mundo desejado")
            } else {
                window.location.href = 'radar.html'
            }
        }
    },


}

Main.init()