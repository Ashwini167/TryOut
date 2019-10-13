window.onload = function () {
    document.getElementById('answer1label').style.display = 'none';
    document.getElementById('answer2label').style.display = 'none';
    document.getElementById('ctof').style.display = 'none';
    document.getElementById('ftoc').style.display = 'none';
}

// Topic -2 Assignment - 1

var userChoice;
function radioChange(choice){
    userChoice = choice.value;
    if(userChoice == 'ctof')
        document.getElementById('ctof').style.display = 'inline';
    else 
        document.getElementById('ftoc').style.display = 'inline';
}   

function tempConversion(temp) {
    document.getElementById('answer1label').style.display = 'block';
    if(userChoice == 'ctof')           
        document.getElementById("answer1").innerHTML = (parseInt(temp)+5) + " degree Fahrenheit";
    else
        document.getElementById("answer1").innerHTML = (parseInt(temp)-5) + " degree Centigrade";
}  

// Topic -2 Assignment - 2

function sumNumbers(number1, number2) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var result = (number1 == number2) ? number1*3 : number1 + number2;
    document.getElementById('answer2label').style.display = 'block';
    document.getElementById("answer2").innerHTML = result;
}