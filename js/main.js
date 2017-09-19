// Things to do today...

// Stop the game from working once the hangman is on full display.
// Make the game reloop so once a word is complete it can move onto the next word.
// Create a restart button that will restart the game.
// Change the styles of the game to make it look more eye-catching.
// Make sure the score is displayed in a message at the end of the game.

$ (function() {

	//Variables
	var words = ['petit-fours', 'cheesy-nachos', 'french-fries', 'cheeseburger' , 'apple', 'fruit-scone'];
	var characters = null;
	var incorrect = 0;
	var correct = [];
	var gameScore = 10;

	//------------------------------------------------------------------------------------------------------------------------------
	function constructBlanks() {
		characters = getRandomWord().split('');

		for(var i = 0; i < characters.length; i++) {
		 	$('.blank_spaces').append('<div class="blanks">_</div>');
		}
	}
	//------------------------------------------------------------------------------------------------------------------------------
	function getRandomWord() {
		var random = Math.floor(Math.random() * words.length);
		return words[random];
	}

	//------------------------------------------------------------------------------------------------------------------------------
	$('#inst_button').on('click', function() {
		$('.instructions').fadeOut();
	});

	constructBlanks();
	game();
	//------------------------------------------------------------------------------------------------------------------------------
	function game() {
		$('.letter').on('click', function () {
			if (characters.includes($(this).val())) {
				for(var i = 0; i < characters.length; i++) {
					if($(this).val() === characters[i]) {
						$('.blanks').eq(i).html($(this).val());
						correct.push($(this).val());
						console.log($('.blanks').val());
						//gameScore++;
						//$('#new_score').html(gameScore);
					}
				}
				console.log($(this).val());

				if ($('.blanks:contains("_")').length === 0) {
				
					$('#losewin').html('YOU WIN!!').removeClass('hide');
					$('.game_buttons').hide();
				}
			} else {
				incorrect += 1;
				showHangman();
				console.log('incorrect: ' + incorrect);
				//gameScore--;
				$(this).hide();
				// if(gameScore <= 0) {
				// 	gameScore = 0;
				// 	$('#losewin').html('GAME OVER! Your final score is ' + gameScore).addClass('show');
				// 	$('.game_buttons').hide();
				// } 
				//$('#new_score').html(gameScore);
			}
		});
			// } else if (gameScore < 0) {
			// 	$('.game_buttons').hide();
			// }
	}

	//------------------------------------------------------------------------------------------------------------------------------
	function showHangman() {
		if (incorrect === 1) {
			$('#pole').addClass('show');
			//gameScore--;
		} else if (incorrect === 2) {
			$('#pole_top').addClass('show');
			//gameScore--;
		} else if (incorrect === 3) {
			$('#rope').addClass('show');
			//gameScore--;
		} else if (incorrect === 4) {
			$('#head').addClass('show');
			//gameScore--;
		} else if (incorrect === 5) {
			$('#left_arm').addClass('show');
			//gameScore--;
		} else if (incorrect === 6) {
			$('#body').addClass('show');
			//gameScore--;
		} else if (incorrect === 7) {
			$('#right_arm').addClass('show');
			//gameScore--;
		} else if (incorrect === 8) {
			$('#left_leg').addClass('show');
			//gameScore--;
		} else if (incorrect === 9) {
			$('#right_leg').addClass('show');
			//gameScore--;
			$('#losewin').html('GAME OVER!').addClass('show');
		}
	}
	//------------------------------------------------------------------------------------------------------------------------------
	function hideHangman() {
		$('.man').removeClass('show');
		$('.man').addClass('hide');
	}

	//------------------------------------------------------------------------------------------------------------------------------
	$('#game_button').on('click', function () { 
		$('.letter').show();
		$('.game_buttons').show();
		incorrect = 0;
		hideHangman();
		$('.blanks').remove();
		constructBlanks();
		$('#losewin').html('');
	});
})