$ (function() {

	//Variables
	var words = ['hello', 'goodbye', 'sparta', 'global'];
	var characters = null;
	var letters = ['a', 'b', 'c']

	console.log(words.length);

	characters = getRandomWord();
	console.log(characters);

	for(var i = 0; i < characters.length; i++) {
	 	$('.blank_spaces').append('<div class="blanks">_</div>');
	}

	// Displays a new hangman word at random on the screen.
	function getRandomWord() {
		var random = Math.floor(Math.random() * words.length);
		return words[random];
	}

	console.log(getRandomWord());

	// Fades out instruction screen and displays the game screen.
	$('#inst_button').on('click', function() {
		$('.instructions').fadeOut();
	});

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays letters on the screen when the user selects the letter buttons.

	// var myButtons = document.getElementsByClassName('.letter');
	// console.log(myButtons);

	// for(var i = 0; i < myButtons.length; i++) {
	// 	myButtons[i].addEventListener('click', function (event) {
	// 		console.log('a');
	// 	});
	// }

	//var getLetters = function () {
		//	if ('.letter' === letters[0]) {
		//	  letters.innerHTML 
		//	} else if ('.letter' === categories[1]) {
		//}

	//------------------------------------------------------------------------------------------------------------------------------
	// Sets a score for the game. Everytime a guess is incorrect and a hangman limb is lost, 
	// the score will decrease but each time a guess is correct it will increase.

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays incorrect letters as they are typed.

	//------------------------------------------------------------------------------------------------------------------------------
	// Resets the game once the reset button is selected.
})