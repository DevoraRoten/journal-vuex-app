<template>
    <NavBar/>
    <div class="entries-container">
        <div class="entry-list">
            <EntryList/>
        </div>
        <div class="children">
            <router-view></router-view>
        </div>
    </div>
    

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        NavBar: defineAsyncComponent(()=>import('../component/NavBar.vue')),
        EntryList: defineAsyncComponent(()=> import('../component/EntryList.vue')),
       // NoEntry: defineAsyncComponent(()=>import('../views/NoEntrySelecc.vue'))
    }

}
</script>

<style scoped>
.entries-container {
    display: flex;
    justify-content: space-around;
    
    /*justify-content: space-around;*/
}
.children {
   /* background-color: pink;
    /*text-align-last: center;*/
    width: 80%;
    min-width: 245px;
    
    
}

.entry-list {
    width: 245px;
    }
</style>