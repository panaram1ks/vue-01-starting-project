import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isLogin: false,
        };
    },
    mutations: {
        increment(state) {
            // setTimeout(function () {
            state.counter = state.counter + 3
            // }, 2000)
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
        mutationCheckIn(state) {
            state.isLogin = true;
        },
        mutationCheckOut(state) {
            state.isLogin = false;
        }
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment')
            }, 2000)
        },
        increase(context, payload) {
            console.log(context);
            context.commit('increase', payload)
        },
        actionCheckIn(context) {
            context.commit('mutationCheckIn')
        },
        actionCheckOut(context) {
            context.commit('mutationCheckOut')
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
        getIsLogin(state) {
            return state.isLogin;
        }
    }
});

const app = createApp(App);
app.use(store);

app.mount('#app');


/*
npm install --vuex  or npm install --vuex@next if you need last version
npm install --save vuex

npm install vue-router
*/
