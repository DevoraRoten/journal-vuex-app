
export default {

    name: 'daybook', 
    component: ()=> import('../layout/DayBookLayout.vue'),
    children: [
        {
            path: '/noentry',
            name: 'no-entry',
            component: ()=>import('@/modules/dayBook/views/NoEntrySelecc.vue')
        },
        {
            path: '/entry',
            name: 'entry',
            component: ()=>import('../views/EntryView.vue')
        },
       
    
    ]
    
}