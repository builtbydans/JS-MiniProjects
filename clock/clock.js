const displayTime = () => {
  // Setting GMT Time Zone
  const dateTime = new Date();
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();

  // Setting AM/PM setting dependent on the hour.
  hours > 12 ? session = 'PM' : 'AM';

  // Adding an extra '0' as a prefix to the number if num less than 10.
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Setting the hardcoded style of how the time will be displayed.
  const time = `${hours} : ${minutes} : ${seconds} ${session}`;

  // Rendering the time variable into the #clock span.
  document.getElementById('clock').innerHTML = time;
}

setInterval(displayTime);
