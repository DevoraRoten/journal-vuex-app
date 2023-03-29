<template>
  <button><i class="fa fa-3x"
  :class="icon"></i></button>
</template>

<script>
export default {
    props:{
        icon:{
            type: String,
            default: 'fa-plus'

        }
    }

}
</script>

<style scoped>
button {
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
    background-color: #3c4;

}
/*
button {
  justify-content: right;
  background-color: #3c4;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  align-self: end;
  
}
i {
  color: white
}*/
button:hover {
  background: #266816 ;
}
</style>