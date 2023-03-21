import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const refs = {
    inputDate: document.querySelector('[id="datetime-picker"]'),
    startBtn: document.querySelector('[data-start]'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
};

let date = null;
let timerId = null;

refs.startBtn.addEventListener('click', onStartTimer);

const timer = {
    isActive: false,
    start(value) {
        if (this.isActive) {
            return;
        };

        const startTime = value;
        this.isActive = true;

        timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = Math.abs(currentTime - startTime);
            const time = convertMs(deltaTime);

            onTimerSetValue(time);
            onStopTimer(deltaTime);
        }, 1000);
    },
};


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
    };


    flatpickr(refs.inputDate, options);
    onDisableBtn();

    function onDateCheck(value) {
        if (value.getTime() < Date.now()) {
            Notiflix.Notify.failure('Оберіть коректну дату');
            timer.isActive = false;
            clearInterval(timerId);
            onTimerSetValue({days: '00', hours: '00', minutes: '00', seconds:'00'});
            onDisableBtn();
            return;
        };

        timer.isActive = false;
        clearInterval(timerId);
        onTimerSetValue({days: '00', hours: '00', minutes: '00', seconds: '00'});
        refs.startBtn.removeAttribute('disabled');
        return (dateValue = value.getTime());
    };

    function onStartTimer() {
        timer.start(dateValue);
    };

    function onStopTimer(time) {
        if (time < 1000) {
            timer.isActive = false;
            clearInterval(timerId);
        };
    };

    function onTimerSetValue ({days, hours, minutes, seconds}) {
        refs.timerDays.textContent = addLeadingZero(days);
        refs.timerHours.textContent = addLeadingZero(hours);
        refs.timerMinutes.textContent = addLeadingZero(minutes);
        refs.timerSeconds.textContent = addLeadingZero(seconds);
    };

    function onDisableBtn() {
        refs.startBtn.setAttribute('disabled', 'disabled');
    };

    function addLeadingZero(value) {
        return String(value).padStart(2, '0');
    };
    

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
      console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
      console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
      console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}