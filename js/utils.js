//Utility class that implements static methods
class Utils {
	constructor() {

	}

	//Method to generate a random ID number for animals
	static idGenerator(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	//Method to return the currently selected value in the select
	static animalSelector() {
		return document.querySelector('select').value
	}
}