import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/global.css';
import './assets/styles/icons.css';
import { registerComponet } from './utils/import.js';
import { projectAuth } from './config/firebase';

let app;

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);
        
        registerComponet(app);
        
        app.use(router);
        
        app.mount('#app');
    }
})

