const secondHand = document.querySelector('.second-hand');
const minuteHhand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log("seconds", seconds);

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHhand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log("minutes", minutes);

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    console.log("hours", hours);
}

setInterval(setDate, 1000);