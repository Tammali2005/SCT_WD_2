let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("display").innerText =
        `${h}:${m}:${s}`;
}

function startTimer() {
    if (!running) {
        running = true;

        timer = setInterval(() => {
            seconds++;

            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    running = false;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    let lapTime =
        document.getElementById("display").innerText;

    let li = document.createElement("li");

    li.innerText = lapTime;

    document.getElementById("laps").appendChild(li);
}