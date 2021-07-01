<template>
    <div class="covers container">
        <div class="row container">
            <div class="tnager col-lg-6 col-md-6 col-12" data-aos="flip-left">
                <button class="b">
                    <b-icon class="i" icon="cart4"></b-icon>

                    <p class="t">delicious food
</p>
                    <p class="d">></p>
                </button>
            </div>
            <div class="n col-lg-6 col-md-6 col-12" data-aos="flip-right" >
                <button class="b">
                    <b-icon class="i" icon="house"></b-icon>

                    <p class="t">love of cooking
</p>
                    <p class="d">></p>
                </button>
            </div>
            <div class="roman col-lg-6 col-md-6 col-12" data-aos="flip-right" >
                <button class="b">
                    <b-icon class="i" icon="house"></b-icon>

                    <p class="t">cooking art
</p>
                    <p class="d">></p>
                </button>
            </div>
            <div class="tba col-lg-6 col-md-6 col-12" data-aos="flip-right">
                <button class="b">
                    <b-icon class="i" icon="house"></b-icon>

                    <p class="t">pastries</p>
                    <p class="d">></p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "covers",
};
</script>

<style scoped>
.tnager {
    margin-top: 30px;
    height: 300px;
    background-image: url("~@/assets/tnager.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}
.n {
    margin-top: 30px;
    height: 300px;
    background-image: url("~@/assets/n.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}
.roman {
    margin-top: 30px;
    height: 300px;
    background-image: url("~@/assets/roman.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
}
.tba {
    margin-top: 30px;
    height: 300px;
    background-image: url("~@/assets/tba.jpeg");
    background-repeat: no-repeat;
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
</style>
