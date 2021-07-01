<template>
    <div class="login container-fluid">

        <div class="login container">
            <video autoplay muted loop>
                <source src="@/assets/water .mp4" type="video/mp4" />
            </video>

            <div class="forms1">
                <form
                    action="Recipes.vue"
                    method="post"
                    @submit.prevent="handlesubmit"
                    class="
                        container
                        formstyle
                        animate__animated animate__backInDown
                    "
                >
                    <div class="password">
                        <label class="styleofnames">Email</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="email"
                            placeholder=" Please Enter your Email"
                        />
                        <small id="emailHelp" class="form-text text-muted"
                            >We'll never share your email with anyone
                            else.</small
                        >
                    </div>

                    <div class="password">
                        <label class="styleofnames">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="pass"
                            placeholder=" Please Enter your Password"
                        />
                    </div>

                    <div>
                        <button class="zer">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login video {
    position: absolute;
    padding-top: 0px;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.formstyle {
    margin-top: 50px;
    height: 350px;
    width: 450px;
    background-color: #f9f7f7;
    opacity: 0.8;
    border-radius: 8%;
    animation: backInDown;
    animation-duration: 2s;
}

.styleofnames {
    font-family: monospace;
    color: #333;
    font-size: 20px;
    padding: 5px 5px;
    border-radius: 4%;
}
.zer {
    font-size: 20px;
    padding: 5px 5px;
    margin: 20px;
    border: solid 0.1px;
    border-radius: 10%;
    background-color: #ee8fae;
}
.zer:hover {
    background-color: #ec2165;
}
</style>
