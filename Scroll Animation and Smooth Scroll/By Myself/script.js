'use strict';

/* Section Colors */
const sections = document.querySelectorAll('section');
const scrollBtn = document.querySelector('#scroll-btn');

const colors = {
	$blue: '#0d6efd',
	$indigo: '#6610f2',
	$purple: '#6f42c1',
	$pink: '#d63384',
	$red: '#dc3545',
	$orange: '#fd7e14',
	$yellow: '#ffc107',
	$green: '#198754',
	$teal: '#20c997',
	$cyan: '#0dcaf0',
	$white: '#fff',
	$black: '#000',
}

sections.forEach((section, index) => {
	section.childNodes[1].style.backgroundColor = colors['' + Object.keys(colors)[index]];
});
/* /////Section Colors */

/* Sections Observer */
const sectionsObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('show');
			observer.unobserve(entry.target);
		}
	});
}, {
	root: null,
	threshold: 0.2,
	rootMargin: '0px',
});

sections.forEach(section => sectionsObserver.observe(section));
/* /////Sections Observer */

/* Smooth Scrolling */
window.addEventListener('scroll', () => window.pageYOffset > sections[1].getBoundingClientRect().top ? scrollBtn.classList.add('show') : scrollBtn.classList.remove('show'));

scrollBtn.addEventListener('click', function(e) {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
});
/* /////Smooth Scrolling */