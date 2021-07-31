window.addEventListener('load', (e) => {
	// Añadir imagen (Tienda)
	$('label[for="store-id"]').addEventListener('click', () => {
		$('#preview-id').src = './img/jpg/img-1.jpg';
		continueButton();
		$('.href_continue_box a').href = './pages/store.html';
	});
	// Añadir imagen (Ofertas)
	$('label[for="offers-id"]').addEventListener('click', () => {
		$('#preview-id').src = './img/jpg/img-2.jpg';
		continueButton();
		$('.href_continue_box a').href = './pages/offers.html';
	});
	// Añadir imagen (Ofertas)
	$('label[for="customers-id"]').addEventListener('click', () => {
		$('#preview-id').src = './img/jpg/img-3.jpg';
		continueButton();
		$('.href_continue_box a').href = './pages/customers.html';
	});
	// Añadir imagen (Ofertas)
	$('label[for="shipping-id"]').addEventListener('click', () => {
		$('#preview-id').src = './img/jpg/img-4.jpg';
		continueButton();
		$('.href_continue_box a').href = './pages/shipping.html';
	});
	function continueButton() {
		$('.href_continue_box a').textContent = 'Continuar';
		$('.href_continue_box a').classList = 'href_continue';
	}
});

function $(argument){return document.querySelector(`${argument}`)};
