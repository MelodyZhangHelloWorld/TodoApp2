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

        commit('setTodos', res.data); //wait for await to complete
    },

    async addTodo ( { commit }, title) { //{ commit },

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