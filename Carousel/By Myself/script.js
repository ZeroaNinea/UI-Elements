'use strict';

const sliderItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

let slidesCount = 0;

const dotsToggle = function(dots) { // Toggle the active class of the dots.
	dots.forEach(dot => dot.classList.remove('active'));
	dots[slidesCount].classList.add('active');
}
const nextSlide = function() {
	slidesCount++;

	if(slidesCount !== sliderItems.length) {
		sliderItems.forEach(item => item.style.transform = `translate(-${100 * slidesCount}%)`);
		dotsToggle(dots);
	} else {
		sliderItems.forEach(item => item.style.transform = 'translate(0)');
		slidesCount = 0;
		dotsToggle(dots);
	}
}
const autoSwitch = function() { // This function is needed so that automatic switching by interval does not interfere with the user's ability to switch slides.
	return setInterval(nextSlide, 5000);
}

let slideInterval = autoSwitch();

document.querySelector('.next').addEventListener('click', function() {
	clearInterval(slideInterval);

	nextSlide();

	slideInterval = autoSwitch();
});
document.querySelector('.prev').addEventListener('click', function() {
	clearInterval(slideInterval);

	if(slidesCount <= 0) {
		sliderItems.forEach(item => item.style.transform = `translate(-${100 * (sliderItems.length - 1)}%)`);

		slidesCount = sliderItems.length - 1;
		dotsToggle(dots);
	} else {
		slidesCount--;
		dotsToggle(dots);

		sliderItems.forEach(item => item.style.transform = `translate(-${100 * slidesCount}%)`);
	}

	slideInterval = autoSwitch();
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', function(e) {
		clearInterval(slideInterval);

		console.log(e, index);

		if(!e.target.classList.contains('active')) {
			dots.forEach(dot => dot.classList.remove('active'));
			e.target.classList.add('active');
		}
		
		if(index <= 0) {
			sliderItems.forEach(item => item.style.transform = `translate(-${0}%)`);
		} else {
			sliderItems.forEach(item => item.style.transform = `translate(-${100 * index}%)`);
		}

		slideInterval = autoSwitch();
	});
});