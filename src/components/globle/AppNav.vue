<template>
    <div class="appnav container-fluid">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="light" fixed="top" >
                <b-navbar-brand href="#">Receips</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="r">
                        <b-nav-item href="#">
                            <router-link to="/" tag="li">
                                <a>Login</a>
                            </router-link>
                        </b-nav-item>
                        <b-nav-item href="#">
                            <router-link to="/about" tag="li">
                                <a> NEW Recipes</a>
                            </router-link>
                        </b-nav-item>
                        
                        <b-nav-item href="#">
                            <router-link to="/registration" tag="li">
                                <a>Registration</a>
                            </router-link>
                        </b-nav-item>
                        
                    

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>    


export default {
    name: "appnav",
};
</script>

<style scoped>
.navbar-dark .bg-light {
    background-color: rgb(255, 255, 255);
}

.navbar-dark .navbar-brand {
    color: #005a8d !important ;
    padding-left: 60px;
    font-family: sans-serif;
    font-weight: lighter;
    text-decoration: none !important;
}
.navbar-dark .navbar-nav{

    padding-left: 70px;
}
 .navbar-dark   .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #3580dc !important;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
}
a {
    color: #b2b8a3 !important;
    float: left;
    font-family: sans-serif;
    text-decoration: none !important ;
    padding-left: 25px;
}


a:focus {
    color: #005a8d !important;
    font-weight: bolder;
    text-decoration: underline 3px !important;
}

.log {
    font-weight: bold;
    color: #3c7392;
    background-color: #b5d9ec;
    border: solid 0.5px #b5d9ec;
    border-radius: 3px;
    padding:10px;
    margin-left: 200px;
}
.log:hover{
        background-color: #043a57 !important;
        color:white;
}


</style>
