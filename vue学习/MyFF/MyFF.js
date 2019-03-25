class MyFF {
	constructor (options) {
		this.$el = options.el
		this.$options = options
		this.$compile = new MyCompile(options)
	}
}