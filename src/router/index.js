import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StatisticalProcesses from "../views/referential/StatisticalProcesses";
import BusinessProcesses from "../views/process/BusinessProcesses";
import Datasets from "../views/structural/Datasets";

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
  },
  {
    path: "/process",
    name: "Process",
    component: BusinessProcesses
  },
  {
    path: "/structural",
    name: "Structural",
    component: Datasets
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
