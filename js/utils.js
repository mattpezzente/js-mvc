//Utility class that implements static variables
class Utils {
	constructor() {

	}

	//Method to generate a random ID number for animals
	static idGenerator(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	static animalSelector() {
		return document.querySelector('select').value
	}
}