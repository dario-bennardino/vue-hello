const {createApp} = Vue;

//dentro create app inserirò tutto il codice JS per Vue (dati,funzioni,eventi..)
createApp({

    data(){
        return{
            messaggio : 'Hello world',
            saluto : 'Ciao',
            nome : 'Mario',
            cognome : 'Rossi',
            nomeUtente : 'Inserisci nome e cognome'

        }
    }

}).mount('#app')