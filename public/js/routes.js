import index from './components/pages/index.js';
import about from "./components/pages/about.js";
import login from "./components/pages/login.js";
import register from "./components/pages/register.js";
import profile from "./components/pages/profile.js";

export default [
    {
        path: '/',
        component: index
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/profile',
        component: profile
    }
]
