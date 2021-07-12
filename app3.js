const bosses = [
    {boss: "Orshabaal", classe: "old", server:"Tenebra", respaw: "Edron", lastDead: "17/04/2021", prob: [0.3,0.6,0.6,0.9,0.4,0.3,0.3,0.0,0.0,0,0], daysLastDead:13, sefie: "https://www.tibiawiki.com.br/images/c/ce/Orshabaal.gif"},
    {boss: "Ferumbras", classe: "old", server:"Tenebra", respaw: "Kharos", lastDead: "10/01/2009", prob: [0.1,0.1,0.1,0.3,0.4,0.7,0.3,0.0,0.1,0,0], daysLastDead:45, selfie: "https://www.tibiawiki.com.br/images/0/0f/Ferumbras.gif"},
    {boss: "Morgaroth", classe: "old", server:"Tenebra", respaw: "Hellgorge", lastDead: "13/04/2014", prob: [0.0,0.0,0.0,0.3,0.5,0.0,0.0,0.0,0.3,0,0], daysLastDead:185, selfie: "https://www.tibiawiki.com.br/images/c/ce/Morgaroth.gif"},
    {boss: "Ghazbaran", classe: "old", server:"Tenebra", respaw: "Formorgar Mines", lastDead: "10/05/2019", prob: [0.1,0.2,0.3,0.3,0.5,0.8,0.6,0.3,0.3,0,1], daysLastDead:15, selfie: "https://www.tibiawiki.com.br/images/5/5e/Ghazbaran.gif"},
    {boss: "Orshabaal", classe: "old", server:"Calmera", respaw: "Edron", lastDead: "17/04/2021", prob: [0.0,0.1,0.2,0.4,0.0,0.0,0.0,0.6,0.9,0,0], daysLastDead:13, sefie: "https://www.tibiawiki.com.br/images/c/ce/Orshabaal.gif"},
    {boss: "Ferumbras", classe: "old", server:"Calmera", respaw: "Kharos", lastDead: "10/01/2009", prob: [0.0,0.0,0.0,0.0,0.0,0.7,0.9,0.2,0.1,0,0], daysLastDead:45, selfie: "https://www.tibiawiki.com.br/images/0/0f/Ferumbras.gif"},
    {boss: "Morgaroth", classe: "old", server:"Calmera", respaw: "Hellgorge", lastDead: "13/04/2014", prob: [0.0,0.0,0.0,0.3,0.5,0.0,0.0,0.0,0.3,0,0], daysLastDead:185, selfie: "https://www.tibiawiki.com.br/images/c/ce/Morgaroth.gif"},
    {boss: "Ghazbaran", classe: "old", server:"Calmera", respaw: "Formorgar Mines", lastDead: "10/05/2019", prob: [0.1,0.2,0.3,0.3,0.5,0.8,0.6,0.3,0.3,0,1], daysLastDead:15, selfie: "https://www.tibiawiki.com.br/images/5/5e/Ghazbaran.gif"},
]

const main = {
    init: function(){
        this.refers()
        this.bindEvents()
    },

    refers: function(){
        this.$localDaData = document.querySelector(".database")
        this.$localDoMundo = document.querySelector(".mundo")
        this.DataTotal = new Date()
        this.DataAbreviada = this.DataTotal.toLocaleDateString()
        this.ServerSelecionado = localStorage.getItem('mundo')
    },

    bindEvents: function(){
        this.$localDoMundo.innerHTML = `<h5>Server:</h5> <h6>${this.ServerSelecionado}</h6>`
        this.$localDaData.innerHTML = `<h5>Data Base:</h5> <h6>${this.DataAbreviada}</h6>`

        

    },


}


main.init()
