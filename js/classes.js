//Composition Class that needs an array of Animals to exist
//Zoo has a static property "zoo", which is the name of the zoo
class Zoo {
	constructor(animals) {
		this.animals = animals
	}

	//The HTML Info to be displayed from the stored Animal objects
	displayInfo() {
		//The reference for where Animal objects are to be inserted
		let insertionPoint = document.querySelector('.zoo-tbody')
		//Loop through the Animals, creating HTML to display them
		for (var i = 0; i < this.animals.length; i++) {
			let tempHTML = `<tr id="animal-id-${this.animals[i].id}">`
			this.animals[i]
			tempHTML += `<td>${this.animals[i].name}</td>`
			tempHTML += `<td>${this.animals[i].id}</td>`
			tempHTML += `<td>${this.animals[i].species}</td>`
			tempHTML += `<td>${this.animals[i].weight}</td>`
			tempHTML += `<td>${Zoo.zoo}</td>`
			tempHTML += '</tr>'
			insertionPoint.insertAdjacentHTML('beforeend', tempHTML)
			document.querySelector(`#animal-id-${this.animals[i].id}`).addEventListener('click', this.animals[i].feed)
		}
	}
}

//Abstract Class
class Animal {
	constructor() {
		//Properties
		this.name = ''
		//Base class generated property for derived classes
		this.id = Utils.idGenerator(0, 10000)
	}

	//Method for overwriting 
	feed() {
		alert(this.species + ' has no diet')
	}
}

//Concrete Class
class Lion extends Animal {
	constructor(n, w) {
		//Inheritance from base class
		super()
		//Properties
		this.name = n
		this.species = "Lion"
		this.weight = w
	}

	//Polymorphism - overwritten method
	feed() {
		alert('Lion\'s eat large amounts of meat')
	}
}

//Concrete Class
class Owl extends Animal {
	constructor(n, w) {
		//Inheritance from base class
		super()
		//Properties
		this.name = n
		this.species = "Owl"
		this.weight = w
	}

	//Polymorphism - overwritten method
	feed() {
		alert('Owls\'s eat a small amount of meat')
	}
}

//Concrete Class
class Dolphin extends Animal { 
	constructor(n, w) {
		//Inheritance from base class
		super()
		//Properties
		this.name = n
		this.species = "Dolphin"
		this.weight = w
	}

	//Polymorphism - overwritten method
	feed() {
		alert('Dolphin\'s eat a large amount of fish & squid')
	}
}

