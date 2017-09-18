$ (function() {

	//Variables
	var words = ['chocolate', 'apple', 'orange', 'carrott' , 'crisps', 'cake'];
	var characters = null;

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

	$('.letter').on('click', function () {
		for(var i = 0; i < characters.length; i++) {
			if($(this).val() === characters[i]) {
				$('.blanks').eq(i).html($(this).val());
				console.log($('.blanks').val());
			}
		}
		console.log($(this).val());
	});

	//------------------------------------------------------------------------------------------------------------------------------
	// Sets a score for the game. Everytime a guess is incorrect and a hangman limb is put on the screen.

	function hangman(correctanswer) {

		if(correctanswer === 1) {
			$('#pole').addClass('.show');
		}
		if(correctanswer === 2) {
			$('#pole_top').addClass('.show');
		}
		if(correctanswer === 3) {
			$('#rope').addClass('.show');
		}
		if(correctanswer === 4) {
			$('#head').addClass('.show');
		}
		if(correctanswer === 5) {
			$('#left_arm').addClass('.show');
		}
		if(correctanswer === 6) {
			$('#body').addClass('.show');
		}
		if(correctanswer === 7) {
			$('#right_arm').addClass('.show');
		}
		if(correctanswer === 8) {
			$('left_leg').addClass('.show');
		}
		if(correctanswer === 9) {
			$('right_leg').addClass('.show');
			$('#lose').html('Loser').addClass('.show');
		}
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Resets the game once the reset button is selected.
	// $('#reset_button').on('click', function() {
	// 	$('.instructions').fadeIn();
	// 	for(var i = 0; i < characters.length; i++) {
	// 		if($(this).val() === characters[i]) {
	// 			$('.blanks').eq(i).html('_');
	// 			console.log($('.blanks').val());
	// 		}
	// 	}
	// });
})