var hourHand = document.querySelector('.hour-hand');
var minuteHand = document.querySelector('.minute-hand');
var secondHand = document.querySelector('.second-hand');

function setDate() {
    var now = new Date();

    var hours = now.getHours();
    var hoursDegrees = Math.round(((hours / 12) * 360) + 90);//Math.roundปัดเศษขึ้น/ลง

    var minutes = now.getMinutes();
    var minutesDegrees = Math.round(((minutes / 60) * 360) + 90);

    var seconds = now.getSeconds();
    var secondsDegrees = Math.round(((seconds / 60) * 360) + 90);

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;


}

setInterval(setDate, 1000);