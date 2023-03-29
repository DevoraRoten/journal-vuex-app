import { createStore } from "vuex";

const store = createStore({
    modules:{
        journal : ()=> import('../modules/dayBook/store/journal')
    }
    
})

export default store