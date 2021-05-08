
function calculateDays(dif) {
	//constantes
	const seg = 1000;
	const min = 60 * seg;
	const hora = min * 60;
	const dia = 24 * hora;

	const dias = Math.floor(dif / dia);
	const horas = Math.floor((dif % dia) / hora);
	const minutos = Math.floor((dif % hora) / min);
	const segundos = Math.floor((dif % min) / seg);

	return [dias, horas, minutos, segundos];
}

function contador() {
	const fechaEsperada = new Date('October 25, 2025 00:00');
	const hoy = new Date();
	
    //Diferencia en milisegundos
	const dif = fechaEsperada.getTime() - hoy.getTime();
	const datos = calculateDays(dif);
	document.querySelector('.day').innerText = datos[0];
	document.querySelector('.hour').innerText = datos[1];
	document.querySelector('.minute').innerText = datos[2];
	document.querySelector('.second').innerText = datos[3];
}

setInterval(contador(), 1000);
