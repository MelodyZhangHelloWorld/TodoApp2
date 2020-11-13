<template>
  <div id="home">
 
   <div class="container">
       <todoList  />




   </div>

  </div>
</template>

<script>
// @ is an alias to /src
import todoList from "@/components/todoList.vue";

export default {
  name: "Home",
  components: {
    todoList
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