<template>
    
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active" >
                <router-link :to="{ name: '/' }" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item active" v-if="!$auth.check()">
                <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item active" v-if="!$auth.check()">
                <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item active" v-if="$auth.check()">
                <router-link :to="{ name: 'dashboard' }" class="nav-link">dashboard</router-link>
            </li>
            <li class="nav-item active" v-if="$auth.check()">
                <!-- <a href="#" @click.prevent="$auth.logout()">Logout</a> -->
                <a href="#" @click="logout()">Logout</a>
            </li>

            </ul>
        </div>
        </nav>
    </div>       
  
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods : {
        logout(){
          this.$auth.logout({
            makeRequest: true,
            params: {}, // data: {} in axios
            success: function () {},
            error: function () {},
            redirect: '/login',
            // etc...
        });
        }
    }

}
</script>

<style>

</style>
