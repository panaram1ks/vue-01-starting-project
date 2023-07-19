import { createApp } from 'vue';
import app from './App.vue';
import router from './router.js';
import store from './store/index.js';


const application = createApp(app);

application.use(router);
application.use(store);

application.mount('#app');



// npm install --save vue-router vuex
