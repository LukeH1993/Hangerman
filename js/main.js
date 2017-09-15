$ (function() {

	var words = ['hello', 'goodbye', 'sparta', 'global'];
	var characters = null;

	console.log(words.length);


	characters = getRandomWord();
	console.log(characters);

	for(var i = 0; i < characters.length; i++) {
	 	$('.blank_spaces').append('<div class="blanks">_</div>');
	}

	function getRandomWord() {
		var random = Math.floor(Math.random() * words.length);
		return words[random];
	}

	console.log(getRandomWord());

	$('p').on('click', function() {
		console.log('I work! YES!!!');
	});

	$('#inst_button').on('click', function() {
		$('.instructions').fadeOut();
	});

})