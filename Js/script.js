const {createApp} = Vue;

//dentro create app inserirò tutto il codice JS per Vue (dati,funzioni,eventi..)
createApp({

    data(){
        return{
            messaggio : 'Hello world',
            saluto : 'Ciao',
            nome : 'Mario',
            cognome : 'Rossi',
            nomeUtente : 'Inserisci nome e cognome',
            miaClasseCss : 'verde',
            newImage : 'https://www.laramind.com/blog/wp-content/uploads/2019/05/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg',
            sizeImage : 'fix-img',

        }
    }

}).mount('#app')