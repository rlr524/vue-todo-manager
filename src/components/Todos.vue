<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
// We use mapGetters, which is a method from vuex, to bring our getters from todos.js
// into our component; the state itself is brought in as a computed property
import { mapGetters, mapActions } from "vuex";
// We use a spread operator on mapActions in our methods as this allows us to use other
// methods; this is needed because we're not actually naming mapActions as an indepentant
// method, we're simply calling it, as it is, an existing method of vuex
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>