const [startBnt, stopBtn] = document.querySelectorAll('button');

stopBtn.disabled = true;
let intervalId = null;

startBnt.addEventListener('click', startBtnClick);
stopBtn.addEventListener('click', stopBtnClick);

function startBtnClick({target}) {
    startBnt.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
};

function stopBtnClick() {
    startBnt.disabled = false;
    stopBtn.disabled = true;

    clearInterval(intervalId);
};



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };