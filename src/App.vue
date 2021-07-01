<template>
    <div id="app">
        <appnav />
        <div style="margin-top: 56px">
            <router-view />
        </div>
    </div>
</template>

<script>
import appnav from "@/components/globle/AppNav.vue";

export default {
    name: "app",
    components: {
        appnav,
    },
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    float: right;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
