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
      
    },
    
    async deleteTodo({ commit }, id){

        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);

    },

    async filterTodos({ commit }, e) {  //not really filter, just to eliminate the number of items retrieved from api

      //  const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText); 

        const limit = parseInt(e.target.value);
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
          );
      
          commit('setTodos', res.data);
    } ,

    async updateTodo({ commit }, updTodo) {
       
        const res = await axios.put(   //put*

          `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
          updTodo
        );
     
        commit('updateTodo', res.data);
        
      } 
        

};

const mutations = {
    setTodos: (state, todos) => (
        state.todos = todos // as -- this.todo = res.data
    ),
        
    newTodo: (state, todo) => state.todos.unshift(todo),  // [todo, ...todos]

    removeTodo: (state, id) => 
    state.todos = state.todos.filter(todo => todo.id !== id),  //array functions

    updateTodo: (state, updTodo) => {   //updTodo: whole object

        
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
       // console.log("***************");
      
        if (index !== -1) { //check*
          state.todos.splice(index, 1, updTodo);
        
         //  console.log(state.todos[index].completed);
          
        }
      }
        
};

export default {

    state,
    getters,
    actions,
    mutations
}