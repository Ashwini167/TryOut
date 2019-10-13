// Topic - 4 Assignment - 1
function isWeekend(myDate) {
    var dayOfTheWeek = new Date(myDate).getDay();
    document.getElementById("answer1").innerHTML = ((dayOfTheWeek == 0) || (dayOfTheWeek == 6) ? 'It is a weekend!': 'It is not a weekend!!');
}

// Topic - 4 Assignment - 2
function calculateLapsedDays() {
    var today = new Date();
    var yearBeginning = new Date(today.getFullYear(),00,01);
    var diffDays = parseInt((today - yearBeginning) / (1000 * 60 * 60 * 24), 10); 
    document.getElementById("answer2").innerHTML = "Number of days passed since the beginning of the year is: " + diffDays;
}

// Topic - 1 Assignment - 3
function findDay(myDate) {  
    var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfTheWeek = dayArr[new Date(myDate).getDay()];
    document.getElementById("answer3").innerHTML = "The date " + myDate + " is a " + dayOfTheWeek + ".";
}