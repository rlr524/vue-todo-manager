<template>
  <div id="app">
    <div class="container">
      <app-add-todo />
      <app-todos />
    </div>
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "App",
  components: {
    appTodos: Todos,
    appAddTodo: AddTodo,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
