<template>
    <div class="entryContainer">
        <div>
            <h2>
                <span><b>15 </b></span>
                <span><b>Julio </b></span>
                <span><b>2023 </b></span>
            </h2>
            
        </div>
        <div class="buttonContainer">
            <button class="borrar"><b>Borrar </b><i class="fa fa-trash-alt"></i></button>
            <button class="subir"><b>Subir Foto </b><i class="fa fa-upload"></i></button>
        </div>
    </div>
    <hr>
    <div class="textContainer">
        <textarea
        placeholder="¿Que Sucedió Hoy?"
        ></textarea>
    </div>
    <Fab
    icon="fa-save"/>
    <img src="../../../assets/logo.png" alt="">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent( ()=> import('../component/FabComponent.vue'))
    }

}
</script>

<style scoped>
.entryContainer {
    display: flex;
    justify-content: space-between;
}
.buttonContainer{
    justify-content: end;
}
button {
    margin: 5px;
    padding: 8px;
    
}
button:hover {
    background: rgb(10, 85, 19);
    color: aliceblue;
}
.borrar {
    background: rgb(204, 102, 34);
}
.subir {
    background: #3c4;
}
.textContainer {
    display:flex;
    flex-direction: column;
}
textarea {
    font-size: 20px;
    height: 100%;
    border: none;
}
img {
    width: 300px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 5px 10px;
}

</style>