$ (function() {

	// Variables
	var words = ['petit-fours', 'cheesy-nachos', 'french-fries', 'cheeseburger' , 'apple-crumble', 'fruit-scone',
	'spaghetti-bolognese', 'chicken-nuggets', 'pizza', 'lasagna', 'roast-chicken', 'toad-in-the-hole'];
	var characters = null;
	var incorrect = 0;
	var correct = [];
	var gameScore = 10;
	var time = null;
	var timeLeft = null;
	var difficulty = null;

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
	$('#inst_button_easy').on('click', function() {
		$('.instructions').fadeOut();
		difficulty = 10;
		timer(difficulty);
		playSound('sounds/eating.mp3');
	});

	$('#inst_button_hard').on('click', function() {
		$('.instructions').fadeOut();
		difficulty = 10;
		timer(difficulty);
		playSound('sounds/eating.mp3');
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
					win();
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
			lose();
		}
	}

	function win() {
		$('#losewin').html('WELL DONE! YOU WIN! WANT ANOTHER GO?').removeClass('hide');
		playSound('sounds/success.mp3');
		clearInterval(timeLeft);
	}

	function lose() {
		$('#losewin').html('GAME OVER!').addClass('show');
		playSound('sounds/fail.mp3');
		$('.letter').hide();
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Makes the hangman disappear from the screen.
	function hideHangman() {
		$('.man').removeClass('show');
		$('.man').addClass('hide');
	}

	//------------------------------------------------------------------------------------------------------------------------------
	// Runs a timer throughout each game round.
	function timer(length) {
		clearInterval(timeLeft);
		time = new Date;

		timeLeft = setInterval(function() {
			var secs = length - (parseInt((new Date - time) / 1000));
			$('.timer').text(secs + ' seconds');
			if (secs == 0) {
				clearInterval(timeLeft);
				lose();
			}
		}, 1000);
		
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
			playSound('sounds/eating.mp3');
			$('.letter').show();
			$('.game_buttons').show();
			incorrect = 0;
			hideHangman();
			$('.blanks').remove();
			constructBlanks();
			$('#losewin').html('');
			timer(difficulty);
		});
})