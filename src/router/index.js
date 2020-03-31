import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StatisticalProcesses from "../views/referential/StatisticalProcesses";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/referential",
        name: "Referential",
        component: StatisticalProcesses
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
