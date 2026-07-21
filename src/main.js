import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// GitHub Pages: restore deep link after 404.html redirect
const redirect = sessionStorage.redirect
delete sessionStorage.redirect
if (redirect && redirect !== location.href) {
  history.replaceState(null, null, redirect)
}

const app = createApp(App)

app.use(router)

app.mount('#app')
