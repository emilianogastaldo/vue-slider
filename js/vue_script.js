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
        getLastPosition() {
            return this.pictures.length - 1;
        },
        isFirstIndex() {
            return this.currentIndex === 0;
        },
        isLastIndex() {
            return this.currentIndex === this.getLastPosition;
        }
    },
    methods: {
        goToPrev() {
            if (this.isFirstIndex) this.currentIndex = getLastPosition;
            else this.currentIndex--;
        },
        goToNext() {
            if (this.isLastIndex) this.currentIndex = 0;
            else this.currentIndex++;
        },
        setCurrentIndex(target) {
            if (target === 'prev') {
                if (this.isFirstIndex) this.currentIndex = getLastPosition;
                else this.currentIndex--;
            } else if (target === 'next') {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            } else {
                this.currentIndex = target;
            }
        }

    },
    mounted() {
        setInterval(() => {
            this.setCurrentIndex('next')
        }, 1000)
    }
});
// monto l'app nel DOM 
app.mount('#root');
