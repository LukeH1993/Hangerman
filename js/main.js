$ (function() {

	//Variables
	var words = ['chocolate', 'apple', 'orange', 'carrott' , 'crisps', 'cake'];
	var characters = null;
	var categories;
	var chosenCategory;
	// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
	// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	// 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	//var score = 0;
	//var incorrect = [];

	console.log(words.length);

	//------------------------------------------------------------------------------------------------------------------------------
	// Displays blank spaces onto the screen.
	characters = getRandomWord();
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
	// $('.letter').on('click', function() {
	// 	$('.letter').val(letters);
	// 	letters.innerHTML;
	// });

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
		// 	$('#right_leg').fadeOut();
		// } else if (next word) {
		// 	$('#left_leg').fadeOut();
		// } else if (next word) {
		// 	$('#right_arm').fadeOut();
		// } else if (next word) {
		// 	$('#left_arm').fadeOut();
		// } else if (next word) {
		// 	$('#body').fadeOut();
		// } else if (next word) {
		// 	$('#head').fadeOut();
		// } else if (next word) {
		// 	$('#rope').fadeOut();
		// } else if (next word) {
		// 	$('#pole_top').fadeOut();
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