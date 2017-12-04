//Static Property - Line 69

class AnimalDO {
	constructor() {
		this.name = ''
		this.id = 0
		this.species = ''
		this.weight = 0
		this.zoo = ''
	}
}

class Controller {
	constructor() {
		console.log('Controller Loaded')
		this.model = new Model()
		this.view = new View()
		this.animalDO = new AnimalDO()
		Zoo.zoo = document.querySelector('.txt-zoo').value
		document.querySelector('.btn-add').addEventListener('click', this.onClickAdd.bind(this))
		document.querySelector('.btn-update').addEventListener('click', this.onClickUpdate.bind(this))
	}

	onClickAdd(e) {
		e.preventDefault()
		let animal = new AnimalDO()
		this.animalDO.name = document.querySelector('.txt-name').value
		this.animalDO.weight = document.querySelector('.txt-weight').value
		this.animalDO.zoo = Zoo.zoo
		let evt = new Event("doneCollectingAnimals")
		evt.data = this.animalDO
		document.dispatchEvent(evt)
	}

	onClickUpdate(e) {
		e.preventDefault()
		let evt = new Event("doneCollectingZoo")
		evt.data = document.querySelector('.txt-zoo').value
		document.dispatchEvent(evt)
	}

	static getInstance() {
		if (!Controller._instance) {
			Controller._instance = new Controller()
			return Controller._instance
		}
		else {
			throw "Error, cannot instantiate another singleton"
		}
	}
}

class Model {
	constructor() {
		console.log('Model Loaded')
		document.addEventListener('doneCollectingAnimals', this.formatAnimals)
		document.addEventListener('doneCollectingZoo', this.formatZoo)
	}

	formatAnimals(e) {
		e.data.id = Utils.idGenerator(1, 10000)
		e.data.species = Utils.animalSelector()
		let evt = new Event("doneFormattingAnimals")
		evt.data  = e.data
		document.dispatchEvent(evt)
	}

	formatZoo(e) {
		Zoo.zoo = e.data
		let evt = new Event("doneConvertingZoo")
		document.dispatchEvent(evt)
	}
}

class View {
	constructor() {
		console.log('View Loaded')
		document.addEventListener('doneFormattingAnimals', this.displayAnimal)
		document.addEventListener('doneConvertingZoo', this.updateZoo)
	}

	displayAnimal(e) {
		let insertionPoint = document.querySelector('.zoo-tbody')
		let tempHTML = `<tr class="animal animal-id-${e.data.id}">`
		tempHTML += `<td>${e.data.name}</td>`
		tempHTML += `<td>${e.data.id}</td>`
		tempHTML += `<td>${e.data.species}</td>`
		tempHTML += `<td>${e.data.weight}</td>`
		tempHTML += `<td class="animal-zoo">${Zoo.zoo}</td>`
		tempHTML += '</tr>'
		insertionPoint.insertAdjacentHTML('beforeend', tempHTML)
	}

	updateZoo(e) {
		let animals = document.querySelectorAll('.animal-zoo')
		console.log(Zoo.zoo)
		for (let i = 0; i < animals.length; i++) {
			animals[i].innerHTML = Zoo.zoo
		}
	}
}






