<template>
<div class="container">
  <h1> TodoList</h1>

  <div class="todoList">
    <div v-for="todo in allTodos" 
    :key="todo.id" class="todo"> 
    {{ todo.title}}

     <!-- delete todo -->
      <div id="trashcan"> 
        <!-- icon not working -->
      <!-- <i @click="deleteTodo2(todo.id)" class="fas fa-trash-alt"> </i>  -->
       <b-button size="sm" @click="deleteTodo(todo.id)">X</b-button> 

      </div>      

    </div>

  </div>


</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "todoList",

    methods:{
      ...mapActions(['fetchTodos', 'deleteTodo'])
    },

    computed: mapGetters(['allTodos']), //** why []??
    created(){
      this.fetchTodos(); //calls the action 
    }
}
</script>

<style scoped>

.todoList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

#trashcan { /* positioning the trash can icon */
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(233, 247, 185);
  cursor: pointer;
}

</style>