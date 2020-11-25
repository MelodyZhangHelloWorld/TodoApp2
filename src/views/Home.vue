<template>
  <div id="home" class="m-4">
 
   <div class="container">

     <AddTodo />
     <FilterTodos />
<BackToTop 
text="Back to Top"/>
    <todoList  />




   </div>

  </div>
</template>

<script>
// @ is an alias to /src
import todoList from "@/components/todoList.vue";
import AddTodo from "@/components/AddTodo.vue"
import FilterTodos from "@/components/FilterTodos.vue"
import BackToTop from 'vue-backtotop'

export default {
  name: "Home",
  components: {
    todoList,
    AddTodo,
    FilterTodos,
    BackToTop
  }
};
</script>


<style scoped>

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}


</style>