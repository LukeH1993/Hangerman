$ (function() {

	//Variables
	var words = ['chocolate', 'apple', 'orange', 'carrott' , 'crisps', 'cake'];
	var characters = null;
	var incorrect = 0;

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
		if (characters.includes($(this).val())) {
			for(var i = 0; i < characters.length; i++) {
				if($(this).val() === characters[i]) {
					$('.blanks').eq(i).html($(this).val());
					console.log($('.blanks').val());
				}
			}
			console.log($(this).val());
		} else {
			incorrect += 1;
			hangman();
			console.log(incorrect);
		}
	});

	//------------------------------------------------------------------------------------------------------------------------------
	// Sets a score for the game. Everytime a guess is inincorrect and a hangman limb is put on the screen.

	function hangman() {

		if (incorrect === 1) {
			$('#pole').addClass('show');
			console.log('I want to work!');
		} else if (incorrect === 2) {
			$('#pole_top').addClass('show');
		} else if (incorrect === 3) {
			$('#rope').addClass('show');
		} else if (incorrect === 4) {
			$('#head').addClass('show');
		} else if (incorrect === 5) {
			$('#left_arm').addClass('show');
		} else if (incorrect === 6) {
			$('#body').addClass('show');
		} else if (incorrect === 7) {
			$('#right_arm').addClass('show');
		} else if (incorrect === 8) {
			$('#left_leg').addClass('show');
		} else if (incorrect === 9) {
			$('#right_leg').addClass('show');
			$('#lose').html('You have lost the game!').addClass('show');
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