
const targetDate = new Date(
    document.getElementById("time").innerText
).getTime();

const target = document.getElementById("timer");
let interval = null;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    target.innerText = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;

    if (distance <= 0) {
        clearInterval(interval);
        target.innerText = "Le compte à rebours est terminé !";
    }
}

window.onload = () => {
    interval = setInterval(updateCountdown, 1000);
}
