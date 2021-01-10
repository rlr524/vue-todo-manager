import axios from "axios";

const state = {
	todos: [],
};

const getters = {
	allTodos: (state) => state.todos,
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await axios.get(process.env.VUE_APP_API_URI);
		commit("setTodos", response.data);
	},
	async addTodo({ commit }, title) {
		const response = await axios.post(process.env.VUE_APP_API_URI, {
			title,
			completed: false,
		});
		commit("newTodo", response.data);
	},
	async deleteTodo({ commit }, id) {
		await axios.delete(process.env.VUE_APP_API_URI + `/${id}`);
		commit("removeTodo", id);
	},
	async filterTodos({ commit }, e) {
		// Get selected value from the filter LOV
		const limit = parseInt(
			e.target.options[e.target.options.selectedIndex].innerText
		);
		const response = await axios.get(
			process.env.VUE_APP_API_URI + `?_limit=${limit}`
		);
		commit("setTodos", response.data);
	},
	async updateTodo({ commit }, updatedTodo) {
		const response = await axios.put(
			process.env.VUE_APP_API_URI + `/${updatedTodo.id}`,
			updatedTodo
		);
		console.log(response.data);
		commit("editTodo", response.data);
	},
};
// Using unshift() here because we want to add the new todo to the front of the todos array
// opposed to using push() which would add it to the end; unshift mutates our existing array, it
// does not create a copy; we use unshift() as well because it benchmarks far better than splice() or using the spread operator
const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) =>
		(state.todos = state.todos.filter((todo) => todo.id !== id)),
	editTodo: (state, updatedTodo) => {
		const index = state.todos.findIndex(
			(todo) => todo.id === updatedTodo.id
		);
		if (index !== -1) {
			state.todos.splice(index, 1, updatedTodo);
		}
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
