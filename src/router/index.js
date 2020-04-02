import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/referential",
    name: "StatisticalProcessList",
    component: () => import("../views/referential/StatisticalProcessList")
  },
  {
    path: "/referential/:id",
    name: "StatisticalProcessEdit",
    component: () => import("../views/referential/StatisticalProcessEdit")
  },
  {
    path: "/referential/add",
    name: "StatisticalProcessAdd",
    component: () => import("../views/referential/StatisticalProcessAdd")
  },
  {
    path: "/process",
    name: "Process",
    component: () => import("../views/process/BusinessProcesses")
  },
  {
    path: "/structural",
    name: "Structural",
    component: () => import("../views/structural/Datasets")
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
