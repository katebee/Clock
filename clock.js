/**
 * Clock mudule
 */
var Clock = (function () {
  var displayTime = function() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var clockDiv = document.getElementById('clock');
      clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
    }
    return {
    displayTime: displayTime //public method
  };


}()); // Immediately-Invoked-Function-Expression

// ------------------ On load -----------------------------

$(document).ready(function() {
  Clock.displayTime();
  setInterval(Clock.displayTime, 1000);
});
