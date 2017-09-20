$ (function() {

	// Variables
	var words = ['petit-fours', 'cheesy-nachos', 'french-fries', 'cheeseburger' , 'apple-crumble', 'fruit-scone',
	'spaghetti-bolognese', 'chicken-nuggets', 'pizza', 'lasagna', 'roast-chicken', 'toad-in-the-hole'];
	var characters = null;
	var incorrect = 0;
	var correct = [];
	var gameScore = 10;
	var start;

	//------------------------------------------------------------------------------------------------------------------------------
	// Produces the blank spaces onto the screen.
	function constructBlanks() {
		characters = getRandomWord().split('');

		for(var i = 0; i < characters.length; i++) {
		 	$('.blank_spaces').append('<div class="blanks">_</div>');
		}
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Produces a random word for each new round.
	function getRandomWord() {
		var random = Math.floor(Math.random() * words.length);
		return words[random];
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Starts the game.
	$('#inst_button').on('click', function() {
		$('.instructions').fadeOut();
		timer();
	});

	constructBlanks();
	game();

	//------------------------------------------------------------------------------------------------------------------------------
	// Sets up the games functionality.
	function game() {
		$('.letter').on('click', function () {
			//playSound('sounds/magic.mp3');
			if (characters.includes($(this).val())) {
				for(var i = 0; i < characters.length; i++) {
					if($(this).val() === characters[i]) {
						$('.blanks').eq(i).html($(this).val());
						correct.push($(this).val());
						console.log($('.blanks').val());
					}
				}
				console.log($(this).val());

				if ($('.blanks:contains("_")').length === 0) {
					playSound('sounds/success.mp3');
					$('#losewin').html('WELL DONE! HANGERMAN LIVES! WANT ANOTHER GO?').removeClass('hide');
					$('.game_buttons').hide();
				}
			} else {
				incorrect += 1;
				showHangman();
				console.log('incorrect: ' + incorrect);
				$(this).hide();
			}
		});
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Makes the hangman show on the screen.
	function showHangman() {
		playSound('sounds/bang.mp3');
		if (incorrect === 1) {
			$('#pole').addClass('show');
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
			$('#losewin').html('GAME OVER! HANGERMAN IS HUNG!').addClass('show');
			playSound('sounds/fail.mp3');
		}
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Makes the hangman disappear from the screen.
	function hideHangman() {
		$('.man').removeClass('show');
		$('.man').addClass('hide');
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Runs a timer throughout each game round.
	function timer() {
		start = new Date;

		setInterval(function() {
			$('.timer').text(30 - (parseInt((new Date - start) / 1000)) + ' seconds');
		}, 1000);

		if(start <= 0) {
			clearInterval(setInterval);
		}
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Plays audio files.
	function playSound(path) {
        var sound = document.createElement('audio');
        sound.setAttribute('src', path);
        sound.play();
    }

	//------------------------------------------------------------------------------------------------------------------------------
	// Resets the game.
	$('#game_button').on('click', function () { 
		$('.letter').show();
		$('.game_buttons').show();
		incorrect = 0;
		hideHangman();
		$('.blanks').remove();
		constructBlanks();
		$('#losewin').html('');
		timer();
	});
})