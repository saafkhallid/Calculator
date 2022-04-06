//-------variable--------//

var screen = document.getElementById("screen");
var numChar;
var currenChar, previewChar;

//-------functions--------//

function clearscreen() {
  screen.value = "";
}

function display(c) {
    screen.value += c;
    // numChar = screen.value.length;
    // console.log("total : " + numChar);
    currenChar = c;
    console.log("current: " + currenChar);
    
    
}

function calculate() {
    screen.value = eval(screen.value);
}
