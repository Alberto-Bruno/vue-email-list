/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Super Bonus:
Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte
*/

const app = Vue.createApp({
    name: "Mail List",
    data() {
        return {
            mailList: []
        };
    },
    methods: {
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.mailList.push(response.data.response);
            });
        },
    },
    created() {
        for (i = 0; i < 10; i++) {
            this.getRandomMail();
        }
    }
});

app.mount("#root");