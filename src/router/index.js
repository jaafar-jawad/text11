import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import Registration from "../views/Registration.vue";
import nave from "../views/nave.vue";



Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
   
    {
        path: "/about",
        name: "About",
        component: About,
    },

    
    {
        path: "/registration",
        name: "registration",
        component: Registration,
    },


    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    

   { path:"/nave",
    name:"nave",
    component: nave,
},

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
