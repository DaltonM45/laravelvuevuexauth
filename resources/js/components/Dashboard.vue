<template>
    <div>
            <div>
               <menu-component> </menu-component>
            </div>
          <h1>Laravel 5 – Our Cool Dashboard </h1>
         <div>
        
              <h2>Bienvenido: {{ nombre }}  </h2>
       
          

           
                <router-link :to="{ name: 'confi' }" >
                   <button class="btn btn-primary" > CAMBIAR DATOS </button>
                  </router-link>
          
         </div>
          
    </div>
  
</template>

<script>
export default {
  data(){
    return {
      nombre : '',
      correo: '',
      userActual : []
    }
  },
  methods:{
    obtener(){
        //this.nombre =  this.$auth.user().name;

        
    }
  },
  created(){
    let me = this; 
      //  this.nombre = this.$auth.user().name;
        axios.get('auth/user').then(function(response){
          
       
          var respuesta = response.data.data;

          me.nombre = respuesta.name;
          me.correo = respuesta.email;
         console.log(me.nombre);
         console.log(me.correo);

        

        })
  },

}
</script>

<style>

</style>
