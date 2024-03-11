const {createApp} = Vue;

//dentro create app inserirò tutto il codice JS per Vue (dati,funzioni,eventi..)
createApp({

    data(){
        return{
            messaggio : 'Hello world'
        }
    }

}).mount('#app')