import { createApp } from 'vue';
import app from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';


const application = createApp(app);

application.use(router);
application.use(store);

application.component('base-card', BaseCard);
application.component('base-button', BaseButton);
application.component('base-badge', BaseBadge);

application.mount('#app');



// npm install --save vue-router vuex
