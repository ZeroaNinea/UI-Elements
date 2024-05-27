'use strict';

const alert = document.querySelector('.alert');

document.querySelector('button').addEventListener('click', function() {
	alert.classList.remove('hide');
	alert.classList.add('show');
	alert.classList.add('showAlert');

	setTimeout(function() {
		alert.classList.remove('show');
		alert.classList.add('hide');
	}, 5000);
});
document.querySelector('.close-btn').addEventListener('click', function() {
	alert.classList.remove('show');
	alert.classList.add('hide');
});

/*
https://www.youtube.com/watch?v=hm79I2JpwJw // YouTube tutorial.
*/