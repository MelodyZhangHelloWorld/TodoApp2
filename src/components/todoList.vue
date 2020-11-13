<template>
<div class="container">
  <h1> TodoList</h1>

<div class="legend">
      <span>Double click to mark as complete..</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>

  <div class="todoList">
    <div  
    @dblclick="onDblClick(todo)" 
    v-for="todo in allTodos" 
    :key="todo.id" class="todo"
     v-bind:class="{'is-complete':todo.completed}"
    > 
    {{ todo.title}}

     <!-- delete todo -->
      <div id="trashcan"> 
   
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
      ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),

      onDblClick(todo) {
        // update the whole todo object BEFORE calling for method in mapActions
      
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed // 
      };
      this.updateTodo(updTodo);
      }
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
  background: #fcf940;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

/*------- delete ------ */
#trashcan { /* positioning the trash can icon */
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(233, 247, 185);
  cursor: pointer;
}
/*------- update ------ */
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #fcf940;
}
.is-complete {
  background: #41b883;;
  color: #fff;
}

/*------- responsiveness ------ */
@media (max-width: 600px) {
  .todoList {
    grid-template-columns: 1fr;
  }
}

</style>