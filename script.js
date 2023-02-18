const holi = new Date('2023-03-06');
var day = document.querySelector('#days');
var hour = document.querySelector('#hours');
var minute = document.querySelector('#minutes');
var second = document.querySelector('#seconds');
setInterval(() => {
	const currentDate = new Date();
	const diff = holi - currentDate;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	day.innerHTML = days;
	hour.innerHTML = hours;
	minute.innerHTML = minutes;
	second.innerHTML = seconds;
}, 1000);
