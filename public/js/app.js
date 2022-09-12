import routes from "./routes.js";
import store from "./store/store.js";
import Notice from "./lib/Notice.js";

window.addEventListener('DOMContentLoaded', (event) => {

    Notice.createNotice({
        title: 'Привет!',
        body: 'Приложение запущено!'
    })

    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    });

    const storeInstance = Vuex.createStore(store);

    window.VueApplication = Vue.createApp({
        name: 'Application',
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('UserAuthorize');
        },
        methods: {
            logout() {
                this.$store.dispatch('logout');
            }
        }
    }).use(router).use(storeInstance).mount('#app');
});
