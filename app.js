const dateInput = document.querySelector('input');
const submitButton = document.querySelector('button');
const output = document.querySelector('.output');
let yourage = 0;

dateInput.max = new Date().toISOString().slice(0, 10);
dateInput.addEventListener("change", event => {
    const birthday = new Date(event.target.value).getTime();
    const currentDate = new Date().getTime();
    if (birthday < currentDate) {
        yourage = currentDate - birthday;
    }
});

const renderAge = (ms) => {
    let year = ms / 1000 / 60 / 60 / 24 / 366;
    let month = (year - (Math.floor(year))) * 12;
    if (month >= 12) {
        month = month - 12;
    }
    let days = (month - (month.toFixed() - 1)) * 30;
    if (days >= 30) {
        days = days - 30;
    }
    output.textContent = `You are alive for ${Math.floor(year) ? Math.floor(year) + " year, " : ""}${Math.floor(month) ? Math.floor(month) + " months, " : ''}${Math.floor(days) ? ' and ' + Math.floor(days) + ' days.' : ''}`;
}

submitButton.addEventListener('click', () => renderAge(yourage));