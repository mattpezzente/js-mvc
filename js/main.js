//Global Variable to store the Zoo instance
let zoo
//Global Variable to store an array of Animal instances
let zooAnimals

(() => {
	//Initalize the array
	zooAnimals = []
	//Instantiate the Zoo class
	zoo = new Zoo(zooAnimals)
	//Create and assign the zoo class its name
	Zoo.zoo = document.querySelector('.txt-zoo').value
	//Add the event  listeners
	document.querySelector('.btn-add').addEventListener('click', addAnimal)
	document.querySelector('.btn-update').addEventListener('click', displayZoo)
})()

//Function to add an animal to the array of animals
function addAnimal(e) {
	//Prevent the default action
	e.preventDefault()
	//Store an Animal object
	let tempAnimal
	//Grab the form values
	let formValues = document.querySelectorAll('*[data-zoo="animal"]')
	//Create an Animal instance depending on the Animal the user has selected
	switch(formValues[0].value) {
		case "Lion":
			tempAnimal = new Lion(formValues[1].value, formValues[2].value)
			break;
		case "Owl":
			tempAnimal = new Owl(formValues[1].value, formValues[2].value)
			break;
		case "Dolphin":
			tempAnimal = new Dolphin(formValues[1].value, formValues[2].value)
			break;
	}
	//Reset the form
	document.querySelector('.main-form').reset()
	//Add the Animal instance to the array of Animals
	zooAnimals.push(tempAnimal)
	//Let the user know that the Animal has been added
	alert(tempAnimal.name + ' Has been added to ' + Zoo.zoo)
}

//Function to display all the Animals in the zooAnimals array
function displayZoo(e) {
	//Prevent the default action
	e.preventDefault()
	//Clear the contents of the HTML in the tbody
	document.querySelector('.zoo-tbody').innerHTML = ''
	//Change the Zoo's static name
	Zoo.zoo = document.querySelector('.txt-zoo').value
	//Display the Animals in the Zoo
	zoo.displayInfo()
}