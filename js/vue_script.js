console.log(Vue);

// Ricavo il metodo creteApp
const { createApp } = Vue;
// Creo l'app
const app = createApp({
    name: 'Vue Carousel',
    data() {
        return {
            pictures,
            prova: 'prova'
        }
    }
});
// monto l'app nel DOM 
app.mount('#root');
