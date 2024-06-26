const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock() {
  let f = new Date(),
  dia = f.getDate(),
  mes = f.getMonth() + 1,
  año = f.getFullYear(),
  diaSemana = f.getDay();

  dia = ('0' + dia).slice(-2);
  mes = ('0' + mes).slice(-2);

  let timeString = f.toLocaleTimeString();
  $tiempo.innerHTML = timeString;

  let semana = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
  let showSemana = semana[diaSemana];
  $fecha.innerHTML = `${año}-${mes}-${dia} ${showSemana}`;
}

setInterval(() => {
digitalClock();
}, 1000);