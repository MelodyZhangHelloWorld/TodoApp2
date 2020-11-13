<template>
  <div id="home">
 
   <div class="container">

     <AddTodo />
       <todoList  />




   </div>

  </div>
</template>

<script>
// @ is an alias to /src
import todoList from "@/components/todoList.vue";
import AddTodo from "@/components/AddTodo.vue"

export default {
  name: "Home",
  components: {
    todoList,
    AddTodo
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