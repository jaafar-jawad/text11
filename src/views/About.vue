<template>
    <div id="app" class="container" data-aos="flip-right" >
        <TodoInput />
        <TodoStatus />
        <div class="row">
        <TodoList />
        </div>
    </div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoStatus from "@/components/TodoStatus";
export default {
    name: "App",
    components: {
        TodoInput,
        TodoList,
        TodoStatus,
    },
};
</script>
<style lang="scss" scoped>

</style>
