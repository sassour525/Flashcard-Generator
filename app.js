var inquirer = require('inquirer');  //require node module 'inquirer' for console prompts
var FlashCard = require('./flashcard.js'); //require flashcard.js to use constructors

//initial prompt
inquirer.prompt([
	{
		type: 'input',
		message: 'What kind of flashcard would you like to make? [basic] or [cloze]',
		name: 'input'
	}
]).then(function(user){

	//basic card generator
	if (user.input == 'basic') {
		//use constructor to create a basic card
		var basicCard = new FlashCard.basic('Who was the first president of the United States?', 'George Washington');

		inquirer.prompt([
			{
				type: 'input',
				message: basicCard.front,
				name: 'front'
			}
		]).then(function(card){
			if (card.front == 'George Washington') {
				console.log("You are correct!");
			} else {
				console.log("Sorry your answer was incorrect!");
			}
		});
	}

	//cloze card generator
	if (user.input == 'cloze') {
		//use constructor to create a cloze card
		var clozeCard = new FlashCard.cloze('George Washington was the first president of the United States.', 'George Washington');

		inquirer.prompt([
			{
				type: 'input',
				message: clozeCard.partial,
				name: 'partial'
			}
		]).then(function(card){
			if (card.partial == 'George Washington') {
				console.log("You are correct!");
			} else {
				console.log("Sorry your answer was incorrect!");
			}
		});
	}

});