import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/dashboard",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Overview.vue"),
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/Index.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: "loan",
          name: "loan",
          component: () => import("@/views/Loan.vue"),
          meta: {
            access: "auth"
          }
        },
        {
          path: ":id/approval",
          name: "approval",
          component: () => import("@/views/Approval.vue"),
          meta: {
            access: "auth"
          }
        }
      ]
    }
  ]
});
