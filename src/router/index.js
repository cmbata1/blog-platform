import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("@/views/Home")
        },
        {
            name: "about",
            path: "/about",
            component: () => import("@/views/About")
        },
        {
            name: "blogs",
            path: "/blogs",
            component: () => import("@/views/Blogs")
        },
        {
            name: "fullblog",
            path: "/blog/:id",
            props: true,
            component: () => import("@/views/FullBlog")
        },

    ]
})