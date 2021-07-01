<template>
    <div class="home">
        <div class="page-all">
            <h1 class="title container">Get Started With delicious recipes</h1>

            <div class="cover container col-lg-12 col-md-12 col-12">
                <button class="b">
                    <b-icon class="i" icon="house"></b-icon>
                    <p class="t">barbecue food
</p>
                    <p class="d">></p>
                </button>
            </div>

            <div class="covers">
                <covers />
            </div>
            <div class="DetHome">
                <DetHome />
            </div>
        </div>
    </div>
</template>

<script>
import covers from "@/components/covers.vue";
import DetHome from "@/components/DetHome.vue";

export default {
    name: "Home",
    components: {
        covers,
        DetHome,
    },
};
</script>

<style scoped>
.home {
    background-color: #f3efef;
    min-height: 100vh;
}

h1 {
    z-index: 100px;
    padding-top: 50px;
    color: #024b75;
}

.cover {
    height: 300px;
    background-image: url("~@/assets/fire.jpg");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    border-radius: 10px;
}

.b {
    margin-top: 220px;
    float: left;
    color: white;
    background-color: #024b75;
    border: 1px solid #024b75;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    padding: 5px;
}
.i {
    float: left;
    height: 35px;
    line-height: 35px;
}
.t {
    float: left;
    height: 25px;
    line-height: 35px;
    padding-left: 15px;
}
.d {
    float: right;
    line-height: 35px;
    height: 25px;
}
.end {
    background-color: aquamarine;
    height: 65px;
}
</style>
