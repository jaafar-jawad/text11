<template>
    <div class="Registration container-fluid ">

            
        <div class=" container ">

            <form
                class=" container formstyle animate__animated animate__zoomIn"
                action="Login.vue"
                method="post"
                @submit.prevent="handlesubmit"
            >
                <div class="FirstName">
                    <label class="styleofnames">First Name </label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="firstName"
                        aria-describedby="emailHelp"
                        placeholder=" Please Enter your First Name "
                    />
                    <small id="emailHelp" class="form-text text-muted"
                        >We'll never share your email with anyone else.</small
                    >
                </div>

                <div class="LastName">
                    <label class="styleofnames">Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="lastName"
                        placeholder=" Please Enter your Last Name"
                    />
                </div>

                <div class="password">
                    <label class="styleofnames">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        placeholder=" Please Enter your Email"
                    />
                </div>

                <div class="password">
                    <label class="styleofnames">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        placeholder=" Please Enter your Password"
                    />
                </div>

                <div>
                    <button type="submit" @click.prevent="registration" class="zer">Signup</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            user:[]
    
        }
    },
    methods:{
        registration(){
            this.user.push(this.firstName);
             this.user.push(this.lastName);
              this.user.push(this.email);
               this.user.push(this.password);
               this.$store.dispatch('addUser',this.user)
                this.$router.push('/login')
               }
               
        }
    }

</script>

<style scoped>
.Registration {
    background-image: url("~@/assets/labtob.jpg");
    background-size: cover;
    height: 100vh;
    position: fixed;
    width: 100%;
}
.formstyle {
    margin-top: 50px;
    height: 450px;
    width: 450px;
    background-color: #f9f7f7;
    opacity: 0.8;
    border-radius: 8%;
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
