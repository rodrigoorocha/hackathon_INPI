import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Resultado from "../views/Resultado.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz,
    meta: { transitionName: 'slide' }
  },
  {
    path: "/resultado",
    name: "Resultado",
    component: Resultado,
    meta: { transitionName: 'slide' }
  },
];

const router = new VueRouter({
  routes,
});

export default router;