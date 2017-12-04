class Zoo {
	constructor(animals) {
		this.animals = animals
	}
}

class Animal {
	constructor() {	
		this.name = ''
		this.id = Utils.idGenerator(0, 10000)
	}

	feed() {
		alert(this.species + ' has no diet')
	}
}

class Lion extends Animal {
	constructor(n, w) {
		super()
		this.name = n
		this.species = "Lion"
		this.weight = w
	}

	feed() {
		alert('Lion\'s eat large amounts of meat')
	}
}

class Owl extends Animal {
	constructor(n, w) {
		super()
		this.name = n
		this.species = "Owl"
		this.weight = w
	}

	feed() {
		alert('Owls\'s eat a small amount of meat')
	}
}

class Dolphin extends Animal { 
	constructor(n, w) {
		super()
		this.name = n
		this.species = "Dolphin"
		this.weight = w
	}

	feed() {
		alert('Dolphin\'s eat a large amount of fish & squid')
	}
}

