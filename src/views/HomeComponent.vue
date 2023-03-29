<template>
  <h2>Home component</h2>
  <button @click="goToDaybook"> Ir a Entries</button>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push( {name: 'no-entry'})
    }
  }

}
</script>

<style>

</style>