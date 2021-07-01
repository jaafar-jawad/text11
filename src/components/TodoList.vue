<template>
  <div>

      <div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-12 col-12"  v-for="todo in allTTodos" :key="todo.id">
       <TodoItem :todo="todo" />
    </div>
  </div>
          

      </div>

    
    
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapGetters } from "vuex";
export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["allTTodos", "completed"])
  }
};
</script>

<style scoped>
</style>