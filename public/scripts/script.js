var timeHour = new Date().getHours()
var timeMinute = new Date().getMinutes()
var ampm = "AM";
const clockLabel = document.getElementById('clock-time');

console.log(timeHour + ":" + timeMinute);

function updateClock() {
  timeHour = new Date().getHours()
  timeMinute = new Date().getMinutes()

  if (timeHour > 12) {
    ampm = "PM";
    timeHour = timeHour - 12;
  } else {
    ampm = "AM";
  }

   clockLabel.innerHTML = timeHour + ":" + timeMinute + " " + ampm;
}

updateClock();
setInterval(updateClock, 60*1000);