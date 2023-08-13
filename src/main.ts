import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";



const app = createApp(App)

app.use(VueAwesomePaginate)
app.use(createPinia())
app.use(router)

app.mount('#app')
