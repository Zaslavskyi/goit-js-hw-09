
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timer = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onDisableBtn () {
    button.setAttribute('disabled', 'disabled');
}

onDisableBtn(stopBtn);

function clickOnStart () {
    timer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    onDisableBtn(startBtn);
    stopBtn.removeAttribute('disabled');
};

function clickOnStop () {
    clearInterval(timer);
    onDisableBtn(stopBtn);
    startBtn.removeAttribute('disabled');
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };