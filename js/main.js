$ (function() {

	//Variables
	var words = ['chocolate', 'apple', 'orange', 'carrott' , 'crisps', 'cake'];
	var characters = null;
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
	'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var correctLetters;
	//var score = 0;
	//var incorrect = [];

	console.log(words.length);

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays blank spaces onto the screen.
	characters = getRandomWord().split('');
	console.log(characters);

	for(var i = 0; i < characters.length; i++) {
	 	$('.blank_spaces').append('<div class="blanks">_</div>');
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays a new hangman word at random on the screen.
	function getRandomWord() {
		var random = Math.floor(Math.random() * words.length);
		return words[random];
	}

	console.log(getRandomWord());

	//------------------------------------------------------------------------------------------------------------------------------
	// Fades out instruction screen and displays the game screen.
	$('#inst_button').on('click', function() {
		$('.instructions').fadeOut();
	});

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays letters on the screen when the user selects the letter buttons.

	$ correctLetters.includes(characters, words);

	$('.letter').on('click', function () {
		for(var i = 0; i < letters.length; i++) {
			if($(this).val() === letters[i]) {
				//console.log('This is a word');
			}
		}
		console.log($(this).val());
	});

	//------------------------------------------------------------------------------------------------------------------------------
	// Sets a score for the game. Everytime a guess is incorrect and a hangman limb is lost, 
	// the score will decrease but each time a guess is correct it will increase.
	// function score() {
	// 	if (letters === words) {
	// 		score++;
	// 	} else {
	// 		score--;
	// 	}
	// }

	// function scoreLose() {
	// 	var loser = $('#lose').val(); //gets the value.
	// 	$('#lose').val('Oh dear! You have lost all your limbs! And your rope! Try again?'); //sets the value.
	// }

	// console.log(scoreLose());

	// function scoreWin () {
	// 	var winner = $('#win').val();
	// 	$('#win').val('Well Done! You have won the game! You genius!');
	// }

	// console.log(scoreWin());

	// function hideLimb() {
		// var next word;
		// if (letters !== words) {
		// 	$('#right_leg').fadeIn();
		// } else if (next word) {
		// 	$('#left_leg').fadeIn();
		// } else if (next word) {
		// 	$('#right_arm').fadeIn();
		// } else if (next word) {
		// 	$('#left_arm').fadeIn();
		// } else if (next word) {
		// 	$('#body').fadeIn();
		// } else if (next word) {
		// 	$('#head').fadeIn();
		// } else if (next word) {
		// 	$('#rope').fadeIn();
		// } else if (next word) {
		// 	$('#pole_top').fadeIn();
		// }
	// }

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays incorrect letters as they are typed.


	//------------------------------------------------------------------------------------------------------------------------------
	// Resets the game once the reset button is selected.
	$('#reset_button').on('click', function() {
		$('.instructions').fadeIn();
	});
})