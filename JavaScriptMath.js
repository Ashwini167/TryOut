window.onload = function () {
    document.getElementById('answer1label').style.display = 'none';
    document.getElementById('answer2label').style.display = 'none';
    document.getElementById('answer3label').style.display = 'none';
}

// Topic -1 Assignment - 1
function limitDigits(number, digits) {
    number = parseFloat(number).toFixed(parseInt(digits));
    document.getElementById('answer1label').style.display = 'block';
    document.getElementById("answer1").innerHTML = number;
}

// Topic - 1 Assignment - 2
function generateNumber() {    
    document.getElementById('answer2label').style.display = 'block';
    document.getElementById("answer2").innerHTML = Math.floor(Math.random() * 101);
}

// Topic - 1 Assignment - 3
function findPercent(number, percent) {
    //number = parseInt(number);
    //percent = parseFloat(percent);  
    document.getElementById('answer3label').style.display = 'block';
    document.getElementById("answer3").innerHTML = ((percent/100) * number).toFixed(2);
}