import index from './components/pages/index.js';
import about from "./components/pages/about.js";
import login from "./components/pages/login.js";
import register from "./components/pages/register.js";
import profile from "./components/pages/profile.js";
import lectures from "./components/pages/lectures.js";

export default [
    {
        path: '/',
        component: index
    },
    {
        path: '/lecture',
        component: lectures
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
    },
    {
        path: '/tests',
        component: profile
    },
    {
        path: '/logout',
        component: login
    }
]
