import axios from 'axios';



const state = {
    todos:[
      
    ]

};

const getters = {

    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }){

        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodos', res.data); // will wait for await to complete, altly other method instead of await...* 
    },

    async addTodo ( { commit }, title) { //{ commit } *{}* "extracts" the 'commit' from the big object -- JS

        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});

        commit ('newTodo', res.data);
      
    }

};

const mutations = {
    setTodos: (state, todos) => (
        state.todos = todos // as -- this.todo = res.data
    ),
        
    newTodo: (state, todo) => state.todos.unshift(todo)  // [todo, ...todos]
        
};

export default {

    state,
    getters,
    actions,
    mutations
}