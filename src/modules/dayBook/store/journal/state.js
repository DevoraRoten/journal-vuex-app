export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus esse culpa consectetur saepe ut excepturi porro ullam assumenda. Placeat, hic quaerat dolores adipisci maiores iure amet consectetur cumque nobis.',
            img: null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus esse culpa consectetur saepe ut excepturi porro ullam assumenda. Placeat, hic quaerat dolores adipisci maiores iure amet consectetur cumque nobis.',
            img: null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus esse culpa consectetur saepe ut excepturi porro ullam assumenda. Placeat, hic quaerat dolores adipisci maiores iure amet consectetur cumque nobis.',
            img: null
        }
    ]

})