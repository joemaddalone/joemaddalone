class Shape {
	constructor(){
		this.attributes = {}	;
	}
	fill = val => this.attributes.fill = val;
	stroke = val => this.attributes.stroke = val;
	strokeWidth = val => this.attributes.strokeWidth = val;
	attr = (key, val) => {
		this.attributes[key] = val;
	}
}

export default Shape;
