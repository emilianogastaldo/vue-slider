console.log(Vue);

// Ricavo il metodo creteApp
const { createApp } = Vue;
// Creo l'app
const app = createApp({
    name: 'Vue Carousel',
    data() {
        return {
            pictures,
            prova: 'prova',
            currentIndex: 0
        }
    },
    computed: {

    },
    methods: {
        goToNext() {
            const lastPic = this.pictures.length - 1;
            if (this.currentIndex === lastPic) this.currentIndex = 0
            else this.currentIndex++
        }
    }
});
// monto l'app nel DOM 
app.mount('#root');
