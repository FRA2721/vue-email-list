// dev: Francesco Cimino;
// proj: Vue Email List;
// lang: js;

// init
const {createApp} = Vue;

createApp( {
    data() {

        return {
            // array-for-emails-(empty)
            emailsArray: [ ],    
        }
    },
    
    created() {

        // for-loop
        for (let i = 0; i < 10; i++) {

            axios

            // random-email-generator
                .get("https://flynn.boolean.careers/exercises/api/random/mail")

                .then((resp)=> {
                    this.rndEmail = resp.data.response
                    this.emailsArray.push(this.rndEmail)

                });
        }
   },
    
}).mount("#root");