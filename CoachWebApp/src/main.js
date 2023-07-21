import { createApp } from 'vue';
import app from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const application = createApp(app);

application.use(router);
application.use(store);

application.component('base-card', BaseCard);
application.component('base-button', BaseButton);
application.component('base-badge', BaseBadge);
application.component('base-spinner', BaseSpinner);
application.component('base-dialog', BaseDialog);

application.mount('#app');

// npm install --save vue-router vuex
