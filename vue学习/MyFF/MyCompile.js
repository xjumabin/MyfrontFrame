class MyCompile {
	constructor (options) {
		this.$el = options.el
		this.$options = options
		this.compile()
	}
	
	compile () {
		// 获取节点内容
		let rt = document.getElementById(this.$el)
		
		// 编译
		let node = rt.firstChild
		if (node.nodeType === 3) {
			let nodectt = node.nodeValue
			nodectt = nodectt.replace('{{ ', '')
			nodectt = nodectt.replace(' }}', '')
			nodectt = this.$options.data[nodectt]
			node.nodeValue = nodectt;
		}
		
		// 返回节点内容
		rt.appendChild(node)
	}
}