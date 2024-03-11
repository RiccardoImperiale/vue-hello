const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Random Image!',
            image: 'https://picsum.photos/800/600',
            textColor: 'vuegreen'
        }
    }
}).mount('#app')