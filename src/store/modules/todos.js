import axios from "axios";

const state = {
	todos: [],
};

const getters = {
	allTodos: (state) => state.todos,
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/todos"
		);
		commit("setTodos", response.data);
	},
	async addTodo({ commit }, title) {
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/todos",
			{ title, completed: false }
		);
		commit("newTodo", response.data);
	},
};
// Using unshift() here because we want to add the new todo to the front of the todos array
// opposed to using push() which would add it to the end; unshift mutates our existing array, it
// does not create a copy; we use unshift() as well because it benchmarks far better than splice() or using the spread operator
const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
