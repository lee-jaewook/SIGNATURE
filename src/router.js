import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Login from "./components/layout/dialog_sign";
import Signup from "./views/Signup";
import ForgotPW from "./views/ForgotPW";
import Contact from "./views/Contact";
import Create from "./views/Create";
import Write from "./views/Write";
import Test from "./views/Test";
import Used from "./views/Used";
import Managing from "./views/Managing";

const Speech = () => import('@/components/Speech')
Vue.use(VueRouter);


const router = new VueRouter({
    mode: "history",
    routes: [
        {
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
        path: "/Test",
        component: Test
    },
    {
        path: "/create",
        component: Create
    },
    {
        path: "/managing",
        component: Managing
    },
    {
        path: '/Speech',
        name: 'Speech',
        component: Speech
    },
    {

        path: "/write",
        component: Write
        },
        {

            path: "/howtouse",
            component: Used
            },
    ]
})

export default router;