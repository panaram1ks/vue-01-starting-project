import { createApp } from 'vue';
import app from './App.vue';
import router from './router.js';


const application = createApp(app)

application.use(router);

application.mount('#app');



// npm install --save vue-router vuex
