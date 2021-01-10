module.exports = {
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "Vue with Vuex Todo Manager";
			return args;
		});
	},
};
