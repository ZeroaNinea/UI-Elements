'use strict';

const dropdownLink = document.querySelector('.dropdown-item .nav-link');
const dropdownItem = document.querySelector('.dropdown-item');
const dropdownMenu = document.querySelector('.dropdown-menu');
const burgerToggle = document.querySelector('.burger-toggle');
const navMenu = document.querySelector('#nav-menu');

dropdownLink.addEventListener('click', function() {
	if(!dropdownMenu.classList.contains('show')) {
		dropdownMenu.classList.remove('hide');
		dropdownItem.classList.remove('hide');
		dropdownMenu.classList.add('show');
		dropdownItem.classList.add('show');
	} else {
		dropdownMenu.classList.remove('show');
		dropdownItem.classList.remove('show');
		dropdownMenu.classList.add('hide');
		dropdownItem.classList.add('hide');
	}
});

burgerToggle.addEventListener('click', function() {
	if(!navMenu.classList.contains('show')) {
		navMenu.classList.remove('hide');
		navMenu.classList.add('show');
	} else {
		navMenu.classList.remove('show');
		navMenu.classList.add('hide');
	}
	
});
// document.querySelector('#nav-menu').classList.add('show');