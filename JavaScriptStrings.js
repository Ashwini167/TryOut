window.onload = function () {
    document.getElementById('answer1label').style.display = 'none';
    document.getElementById('answer2label').style.display = 'none';
    document.getElementById('answer3label').style.display = 'none';
}

// Topic -1 Assignment - 1
function splitString(myString) {
    var convertedArray = myString.split(" ");
    document.getElementById('answer1label').style.display = 'block';
    document.getElementById("answer1").innerHTML = convertedArray;
}

// Topic - 1 Assignment - 2
function extractChars(myString, noOfChars) {
    var newString = myString.slice(noOfChars);
    document.getElementById('answer2label').style.display = 'block';
    document.getElementById("answer2").innerHTML = newString;
}

// Topic - 1 Assignment - 3
function alterCase(myString) {  
    var newString = "";
    for(var counter = 0; counter < myString.length; counter++) {
        if(myString.charCodeAt(counter) >= 65 && myString.charCodeAt(counter) <= 90) {
            newString = newString + myString.charAt(counter).toLowerCase();
        } else {
            newString = newString + myString.charAt(counter).toUpperCase();
        }
    }
    document.getElementById('answer3label').style.display = 'block';
    document.getElementById("answer3").innerHTML = newString;
}