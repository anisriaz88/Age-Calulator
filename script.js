let days = document.getElementById('days').value;
let months = document.getElementById('months').value;
let years = document.getElementById('years').value;

function age() {
    let days = document.getElementById('days').value;
    let months = document.getElementById('months').value;
    let years = document.getElementById('years').value;

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (days > day) {
        day = day + mon [months - 1];
        month = month - 1;
    }
    if (months > month) {
        month = month + 12;
        year = year - 1;
    }

    let d = day - days;
    let m = month - months;
    let y = year - years;
    document.getElementById('age').innerHTML = "You are " + y + " years " + m + " months " + d + " days old.";
}