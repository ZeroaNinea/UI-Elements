'use strict';

const generateAccordions = async function(count) {
	for(let i = 0; i <= count - 1; i++) {
		await fetch(`https://baconipsum.com/api/?type=meat-and-filler`).then(response => {
			if(response.ok) {
				return response.json();
			} else {
				throw new Error('Error: ', response.status);
			}
		}).then(data => {
			if(data) {
				const html = `
					<div class="accordion">
						<div class="accordion-heading">
							<h2>${data[0].split(' ').slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
							<i class="fas fa-angle-down"></i>
						</div>
						<p>${data[1]}</p>
					</div>
				`;

				document.querySelector('.accordion-wrapper').insertAdjacentHTML('beforeend', html);
			} else {
				throw new Error('Something is wrong with response data.');
			}
		}).catch(err => console.error(err));
	}

	const accordions = document.querySelectorAll('.accordion');
	const accordionsHeadings = document.querySelectorAll('.accordion .accordion-heading');

	accordions.forEach((acco, index) => {
		accordionsHeadings[index].addEventListener('click', function() {
			if(acco.classList.contains('active')) {
				acco.classList.remove('active');
			} else {
				accordions.forEach((subcontent) => {
					subcontent.classList.remove('active');
				});
				acco.classList.add('active');
			}
		});
	});
}
generateAccordions(6);