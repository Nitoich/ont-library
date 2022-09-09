import routes from "./routes.js";

window.addEventListener('DOMContentLoaded', (event) => {

    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    });

    window.VueApplication = Vue.createApp({
        name: 'Application',
        data() {
            return {

            }
        },
        mounted() {
            console.log('created')
        },
        methods: {

        }
    }).use(router).mount('#app');
});
