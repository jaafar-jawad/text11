<template>
 <div class="container in">


     <h1>please Enter a New Receips</h1>
  <div class="row">
          <div class="col-3">
          </div>
    <div class="col-6">

<input
        @change="todoTextChange"
        v-bind:value="todoText"
        class="col form-control mr-"
        type="text"
      />
    </div>
      <div class="col-2">
      <button @click="addTodoI" class="btn btn-primary">Add</button>
      </div></div></div>
    
  
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoI() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
        complete: false
      });
      this.todoText = "";
    }
  }
};
</script>

<style scoped>

.in{

    margin-top: 200px;

}
</style>