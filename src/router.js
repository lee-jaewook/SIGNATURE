import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import ForgotPW from "./views/ForgotPW";
import Contact from "./views/Contact";
import Create from "./views/Create";
import Write from "./views/Write";
import Stt from "./views/Stt";
// import GoogleLogin from './GoogleLogin.vue';
// import LoaderPlugin from './LoderPlugin';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "/forgotpassword",
        component: ForgotPW
    },
    {
        path: "/Stt",
        component: Stt
    },
    {
        path: "/create",
        component: Create
    },{
            path: "/write",
            component: Write
        }]
})

export default router;