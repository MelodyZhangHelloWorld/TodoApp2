<template>
  <div>

<div class="add m-3">
    <b-col cols-12 >
<form @submit="submitForm" >
        <input type="text" 
        v-model="title" placeholder="Add Todo.. "> <!-- v-model -->
        <input  type="submit" value="Add">

    </form>

    </b-col>
</div>


  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    data(){
        return {
            title: ''
        }
    },

    methods:{
        ...mapActions(['addTodo']),
        submitForm(e){
        console.log('addTodo method.');
        
        e.preventDefault(); 

        this.addTodo(this.title);
        console.log('addTodo method.');
        

        }
    }

}

</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;  /* ??*/
  padding: 8px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  
}
</style>