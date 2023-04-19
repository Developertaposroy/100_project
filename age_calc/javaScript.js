const username = document.querySelector("#username");
const dod = document.querySelector("#dob");
const btn = document.querySelector(".btn");
const showName = document.querySelector(".u-name");

const months =[31,28,31,30,31,30,31,31,30,31,30,31];

btn.addEventListener("click", claculateAge);

function claculateAge(e) {
    e.preventDefault();
    let today =new Date();
    let dodInput =new Date(dod.value);
    let  birthMonth , birthDate, birthYear;
    let birthDetails = {
        date : dodInput.getDate(),
        month : dodInput.getMonth() +1,
        year : dodInput.getFullYear(),
    };
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)

    ){
        alert("Invalid date");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth -birthDetails.month;
    }

    if (currentDate >= birthDetails.date){
        birthDate =currentDate -birthDetails.date;
    }
    else {
        birthMonth--;
        let days =months[currentMonth -2];
        birthDate = days + currentDate -birthDetails.date;
    }
    if (birthMonth < 0){
        birthMonth = 11;
        birthYear--;
    }

    displayResult(birthDate, birthMonth, birthYear);

    function displayResult(bDate, bMonth, bYear){
        showName.textContent = username.value;
        document.querySelector(".age-year").
            textContent = bYear + "Years";
        document.querySelector(".age-month").
            textContent = bMonth + "Months";
        document.querySelector(".age-day").
            textContent = bDate + "Day"

    }

}













