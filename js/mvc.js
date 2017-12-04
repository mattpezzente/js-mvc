// Data Object Class to transport animal objects through the MVC
class AnimalDO {
	constructor() {
		this.name = ''
		this.id = 0
		this.species = ''
		this.weight = 0
	}
}

//Controller Class which is also a Singleton (Instantiated in main.js)
class Controller {
	constructor() {
		//Build the Model, View and Animal Data Object
		this.model = new Model()
		this.view = new View()
		this.animalDO = new AnimalDO()
		/*Set the Static property of the AnimalDP class to the "Zoo" 
		HTML input value */
		AnimalDO.zoo = document.querySelector('.txt-zoo').value
		//Adding event listeners to the buttons
		document.querySelector('.btn-add').addEventListener('click', this.onClickAdd.bind(this))
		document.querySelector('.btn-update').addEventListener('click', this.onClickUpdate.bind(this))
	}

	onClickAdd(e) {
		//Prevent Default Action
		e.preventDefault()
		//Collect and store the input values from the Form inputs
		this.animalDO.name = document.querySelector('.txt-name').value
		this.animalDO.weight = document.querySelector('.txt-weight').value
		this.animalDO.zoo = AnimalDO.zoo
		//Create the custom event for dispatching
		let evt = new Event('doneCollectingAnimals')
		//Store the AnimalDO object for dispatch
		evt.data = this.animalDO
		//Dispatch the custom event
		document.dispatchEvent(evt)
	}

	onClickUpdate(e) {
		//Prevent Default Action
		e.preventDefault()
		//Create the custom event for dispatching
		let evt = new Event("doneCollectingZoo")
		//Get and Store the "Zoo" input item and dispatch
		evt.data = document.querySelector('.txt-zoo').value
		//Dispatch the custom event
		document.dispatchEvent(evt)
	}

	/*Singleton - static instantiation method, which only allows
	one instance of this class to be instantiated at a tiem*/
	static getInstance() {
		if (!Controller._instance) {
			Controller._instance = new Controller()
			return Controller._instance
		}
		else {
			throw 'Error, cannot instantiate another singleton'
		}
	}
}

//Model Class that edits and formats the data to send to the View
class Model {
	constructor() {
		//Add event listeners to the document and listen for dispatched events
		document.addEventListener('doneCollectingAnimals', this.formatAnimals)
		document.addEventListener('doneCollectingZoo', this.formatZoo)
	}

	formatAnimals(e) {
		//Assign the ID a randomly generated ID
		e.data.id = Utils.idGenerator(1, 10000)
		//Assign the species the currently selected animal from the select
		e.data.species = Utils.animalSelector()
		//Create the custom event for dispatching
		let evt = new Event('doneFormattingAnimals')
		//Store the updated data into the custom event object
		evt.data  = e.data
		//Dispatch the custom event
		document.dispatchEvent(evt)
	}

	formatZoo(e) {
		//Assign the static AnimalDO property 
		AnimalDO.zoo = e.data
		let evt = new Event('doneConvertingZoo')
		//Dispatch the custom event
		document.dispatchEvent(evt)
	}
}

//View Class that recieves and displays data
class View {
	constructor() {
		//Add event listeners to the document and listen for dispatched events
		document.addEventListener('doneFormattingAnimals', this.displayAnimal)
		document.addEventListener('doneConvertingZoo', this.updateZoo)
	}

	displayAnimal(e) {
		//Find and store where the HTML will be inserted
		let insertionPoint = document.querySelector('.zoo-tbody')
		//Create the HTML for insertion
		let tempHTML = `<tr class="animal animal-id-${e.data.id}">`
		tempHTML += `<td>${e.data.name}</td>`
		tempHTML += `<td>${e.data.id}</td>`
		tempHTML += `<td>${e.data.species}</td>`
		tempHTML += `<td>${e.data.weight}</td>`
		tempHTML += `<td class="animal-zoo">${AnimalDO.zoo}</td>`
		tempHTML += '</tr>'
		//Insert the created HTML into the insertion point
		insertionPoint.insertAdjacentHTML('beforeend', tempHTML)
	}

	updateZoo(e) {
		//Store all the zoo names from all the Animals currently displaying
		let animals = document.querySelectorAll('.animal-zoo')
		//Loop through all zoo names, and updated them to the new zoo name
		for (let i = 0; i < animals.length; i++) {
			animals[i].innerHTML = AnimalDO.zoo
		}
	}
}






