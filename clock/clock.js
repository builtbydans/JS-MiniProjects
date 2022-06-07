const displayTime = () => {
  const dateTime = new Date();
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();

  hours > 12 ? session = 'PM' : 'AM';

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  const time = `${hours} : ${minutes} : ${seconds} ${session}`;

  document.getElementById('clock').innerHTML = time;
}

setInterval(displayTime);
