'use strict';

/* Select all the necessary elements. */
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const line = document.querySelector('.line');

/* Position and size the line below the tab menu. */
line.style.width = tabs[0].offsetWidth + 'px';
line.style.left = tabs[0].offsetLeft + 'px';

tabs.forEach((tab, index) => {
	tab.addEventListener('click', (e) => {
		/* Delete the class "active" from all the tab elements, and set the class active to the current active element. */
		tabs.forEach(tab => tab.classList.remove('active'));
		tab.classList.add('active');

		/* Reposition and resize the line below the tab menu. */
		line.style.width = e.target.offsetWidth + 'px';
		line.style.left = e.target.offsetLeft + 'px';

		/* Delete the class "active" from all the tab menu content elements, and set the class active to the current active element. */
		contents.forEach(content => content.classList.remove('active'));
		contents[index].classList.add('active');
	});
});