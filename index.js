function toggleMode() {
	const body = document.body;

	body.classList.toggle('light');

	const img = document.querySelector('#profile img');

	if (body.classList.contains('light')) {
		img.setAttribute('src', './assets/perfil_light.jpeg');
		img.setAttribute('alt', 'foto de Murillo Justino em um lugar ensolarado e arborizado');
	}
	else {
		img.setAttribute('src', './assets/perfil_dark.jpeg');
		img.setAttribute('alt', 'desenho de um guarda-chuva com vida em tons escuros');
	}
}
