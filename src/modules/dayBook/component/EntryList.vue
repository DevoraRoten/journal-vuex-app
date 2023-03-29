<template>
  
    
  <div class="entryContainer"
  @click="$router.push({name:'entry', params: {id:10}})">
    <div class="input-container">
      <input type="text" placeholder=" Buscar un Blog">
    </div>
    <div class="entry-scrollarea">
      <EntryComponent
      class="entryComponent"
      v-for="item in 10"
        :key="item"
      />
    </div>
   
  </div>
  <!--<NoEntry/>-->


 

 
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    EntryComponent: defineAsyncComponent(()=>import('./EntryComponent.vue')),
    //NoEntry: defineAsyncComponent(()=>import('../views/NoEntrySelecc.vue'))
  }

}
</script>

<style scoped>
.entryContainer {
  border-right: 1px solid black;
  height: calc(100vh - 90px);
  width: 35vh;
  padding-left: 10px;

}
.entry-scrollarea{
  
  height: calc(100vh - 90px);
  width: 35vh;
  overflow: scroll;

}

input {
  margin-top: 10px;
  margin-bottom: 10px;
}
.entryComponent{
  padding-bottom: 6px;
  border-bottom: 1px solid black;
}


</style>