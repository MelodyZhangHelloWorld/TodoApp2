<template>
  <div id="home" class="m-4">
 
   <div class="container">

     <AddTodo />
     <FilterTodos />

    <todoList  />




   </div>

  </div>
</template>

<script>
// @ is an alias to /src
import todoList from "@/components/todoList.vue";
import AddTodo from "@/components/AddTodo.vue"
import FilterTodos from "@/components/FilterTodos.vue"

export default {
  name: "Home",
  components: {
    todoList,
    AddTodo,
    FilterTodos
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