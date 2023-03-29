import {createRouter, createWebHashHistory} from 'vue-router'
import { defineAsyncComponent } from "vue"
import daybookRouter from '../modules/dayBook/router'

const routes = [
    { path: '/', 
    component: defineAsyncComponent(()=> import('../views/HomeComponent.vue')) 
    },
    { path: '/about', 
    component: defineAsyncComponent(()=> import('../views/AboutComponent.vue')) 
    },
    {
      path: '/daybook',
      ...daybookRouter
    },
    

  ]
  

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router