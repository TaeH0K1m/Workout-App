const displayText = document.getElementById("display__text");
const startButton = document.getElementById("button__start");
const stopButton = document.getElementById("button__stop");
const setNums = document.querySelectorAll(".set__num");
let index = 0;

startButton.addEventListener("click", function () {
  displayText.innerHTML = setNums[index].textContent;
});

stopButton.addEventListener("click", function () {
  displayText.innerHTML = "00:15";
  index = index + 1; // after countdown.
});
