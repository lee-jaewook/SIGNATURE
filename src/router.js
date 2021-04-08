import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Write from "./views/Write";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        component: Home
    },
    {
        path: "/About",
        component: About
    },
    {
        path: "/Write",
        component: Write
    }]
});

export default router;