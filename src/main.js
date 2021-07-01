import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "normalize.css";
import "vue-fullpage.js";
import "fullpage.js/vendors/scrolloverflow";
import AOS from "aos";
import "aos/dist/aos.css";
import "./scss/main.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    created() {
        AOS.init();
    },
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
