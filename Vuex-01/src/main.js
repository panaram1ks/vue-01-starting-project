import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 3
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
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
    }
}


const store = createStore({
    modules: { // bandle Modules to one store
        numbers: counterModule,
    },
    state() {
        return {
            
            isLoggedIn: false,
        };
    },
    mutations: {

        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn
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
