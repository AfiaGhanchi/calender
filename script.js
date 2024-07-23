const daysElement = document.getElementById("days");
const monthYearElement = document.getElementById("monthYear");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();


    monthYearElement.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;


    daysElement.innerHTML = '';


    const firstDayIndex = new Date(year, month, 1).getDay();


    const lastDay = new Date(year, month + 1, 0).getDate();


    const prevLastDay = new Date(year, month, 0).getDate();


    for (let x = firstDayIndex; x > 0; x--) {
        const prevMonthDay = document.createElement("div");
        prevMonthDay.classList.add("prev-date");
        prevMonthDay.innerText = prevLastDay - x + 1;
        daysElement.appendChild(prevMonthDay);
    }


    for (let i = 1; i <= lastDay; i++) {
        const day = document.createElement("div");
        day.innerText = i;
        daysElement.appendChild(day);
    }
}

prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);
