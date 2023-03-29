<template>
  <div>
    <h1>No Hay Nada Seleccionado</h1>
    
  </div>
  <Fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
console.log('holii')
export default {
  components: {
    Fab : defineAsyncComponent( ()=> import('../component/FabComponent.vue'))
  }

}
</script>

<style scoped>
div {
  
  height: 100%;
  display: flex ;
  justify-content: space-around;
  text-align: left;
  
}
h1 {

  margin:10px;
  align-self: center;
  
  
}


</style>