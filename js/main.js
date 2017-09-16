$ (function() {

	//Variables
	var words = ['hello', 'goodbye', 'sparta', 'global'];
	var characters = null;

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

	// Displays letters on the screen when the user selects the letter buttons.
	// var myButtons = document.getElementsByClassName('.letter');
	// console.log(myButtons);

	// for(var i = 0; i < myButtons.length; i++) {
	// 	myButtons[i].addEventListener('click', function (event) {
	// 		console.log('a');
	// 	});
	}
})