<template>
    <div>
        <div class="container">
            <input type="text" class="form-control" v-model="email">
            <input type="text" class="form-control" v-model="name">
            <br><br>
            <button class="btn btn-success" @click="actualizarUser()"> Actualizar</button>
            <button class="btn btn-success" @click="$router.push({name: 'dashboard'})">Ir atras</button>

            <div class="alert alert-success" role="alert" v-if="permiso">
               <p>ACTUALIZADO</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            name: '',
            permiso: false
        }
    },
    methods : {
        datosUser(){
           /* this.$auth.user();
            this.email =  this.$auth.user().email; 
            this.name =  this.$auth.user().name; 
            console.log( this.$auth.user() );*/

       let me = this;
        axios.get('auth/user').then(function(response){
        // console.log(response.data);

          var respuesta = response.data.data;

          me.name = respuesta.name;
          me.email = respuesta.email;
         console.log(me.name);
         console.log(me.email);

        

        })
        },
        actualizarUser(){

             let me = this;

            axios.post('auth/configuracion', {
                 'name' : this.name,
                 'email': this.email,
            }).then(function(response) {
               me.permiso = true;
               // me.$router.go('/dashboard')
            })

        }
    },
    mounted(){
        this.datosUser();
    }

}
</script>

<style>

</style>
