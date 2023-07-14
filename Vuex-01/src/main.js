import { createApp } from 'vue';
import store from './store/index';

import App from './App.vue';



const app = createApp(App);
app.use(store);

app.mount('#app');


/*
npm install --vuex  or npm install --vuex@next if you need last version
npm install --save vuex

npm install vue-router
*/
