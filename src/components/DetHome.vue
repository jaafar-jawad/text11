<template>
    <div class="DetHome">
        <div class="row container-fluid">
            <div class="det-lefet col-lg-3 col-md-6 col-12">
                <ul>
                    <li>my masijid</li>
                    <li>zakat/Giving</li>
                    <li>Events</li>
                    <li>halal</li>
                </ul>
            </div>
            <div class="det-lefet col-lg-3 col-md-6 col-12">
                <ul>
                    <li>market place</li>
                    <li>News</li>
                    <li>vlounter</li>
                    <li>matrimonial</li>
                </ul>
            </div>

            <div class="det-right col-lg-3 col-md-6 col-12">
                <ul>
                    <li class="more">More Detalis</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </ul>
            </div>

            <div class="det-right col-lg-3 col-md-6 col-12">
                <ul>
                    <li class="more">More Detalis</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </ul>
            </div>

           
        </div>
        <div class="end container-fluid ">
            <div class=" row text container-fluid">
                <p class="all col-lg-4 col-md-12 co-12">ALL Rights reseved 2021</p>
                <ul class="item col-lg-4 col-md-12 co-12">
                    <li>home</li>
                    <li>Terms use</li>
                    <li>privacy policy</li>
                    <li>About</li>
                </ul>
                <div class="col-lg-4 col-md-12 co-12">
                <b-icon class="i" icon="cart4"></b-icon>
                <b-icon class="i" icon="cart4"></b-icon>
                <b-icon class="i" icon="cart4"></b-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetHome",
};
</script>

<style scoped>
.DetHome {
    height: 300px;
    background-color: rgb(255, 255, 255);
    margin-top: 100px;
}

.det-lefet {
    float: left;
    text-align: center;
}

.det-lefet ul li {
    padding: 13px;
    text-decoration: none;
    list-style-type: none;
}

.det-right {
    float: right;
}

.det-right ul li {
    padding: 13px;
    text-decoration: none;
    list-style-type: none;
}

.more {
    font-weight: bold;
    color: blue;
}
.end {
    background-color: rgb(211, 250, 237);
    height: 200px;
    width: 100%;
}
.text{

    margin-top: 30px;
}
.all {
    height: 30px;
    padding: 12px;
    color :#024b75;
    font-weight: bold;
        margin-top: 30px;

}

.i {
    padding: 12px;
    line-height: 30px;
    color :#024b75;
    font-weight: bold;
    margin-top: 30px;


}

.end .text .item {
    display: inline-block;

}

.end .text .item li {
    display: inline-block;
    padding: 12px;
    color :#024b75;
    font-weight: bold;
    margin-top: 30px;
}
</style>
