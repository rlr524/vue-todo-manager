<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input
          type="text"
          v-model="title"
          id="add"
          placeholder="Add a todo..."
          aria-placeholder="Add a todo..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  flex: 10;
  padding: 0.625rem;
  border: 1px solid #41b883;
  outline: 0;
}
button {
  flex: 2;
  background-color: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>