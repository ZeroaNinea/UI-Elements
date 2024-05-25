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
					<div class="accordion-wrapper">
						<div class="accordion">
							<div class="accordion-heading">
								<h3>${data[0].split(' ').slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
								<i class="fas fa-angle-down"></i>
							</div>
							<p class="accordion-content">${data[1]}</p>
						</div>
					</div>
				`;
				document.querySelector('.container').insertAdjacentHTML('beforeend', html);
			} else {
				throw new Error('Something is wrong with response data.');
			}

			const accordions = document.querySelectorAll('.accordion-wrapper .accordion');

			accordions.forEach((acco) => {
				acco.addEventListener('click', function() {
					accordions.forEach((subcontent) => {
						subcontent.classList.remove('active');
					});
					acco.classList.add('active');
				});
			});
		}).catch(err => console.error(err));
	}
}
generateAccordions(6);

/*
https://www.youtube.com/watch?v=7JbvEEICreg // Youtube lesson.
https://getbootstrap.com/docs/5.0/components/accordion/ // Bootstrap documentation.
https://baconipsum.com/json-api/ // Lorem ipsum API.
*/