
let longMousePress = false;
let numKeyBackColor;
let clearBackColor;
let operatorBackColor;
let keyPressColor = "#f5e242";
let mathBuild = new mathMaker();

function appendNum(datum) {
    mathBuild.appendNumber(datum);
}

function appendDec() {
    mathBuild.appendDec();
}

function appendMathOperator(datum) {
    mathBuild.appendOperator(datum);
}

function equateMath() {
    mathBuild.evaluateEquation();
}

function changeOfSign() {
    mathBuild.changeSign();
}

function sqRoot() {
    mathBuild.squareRoot();
}

function calcPercent() {
    mathBuild.percent();
}

function inverse() {
    mathBuild.multInverse();
}

function keyUp(e) {

    switch (e.key) {

        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '+': case '-': case '*': case '/': case '=':
            document.getElementById(e.key).style.backgroundColor = '';
            break;

        case 'Backspace':
            document.getElementById('ce').style.backgroundColor = '';
            break;

        case 'Enter':
             document.getElementById('=').style.backgroundColor = '';
             break;

        case '.':
            document.getElementById('dec').style.backgroundColor = '';
            break;
    }

}

// keyPressColor = "#eed240";
function keyDown(e) {

    console.log(e.key);

    switch (e.key) {

        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            document.getElementById(e.key).style.backgroundColor = keyPressColor;
            mathBuild.appendNumber(e.key);
            break;

        case '.':
            document.getElementById('dec').style.backgroundColor = keyPressColor;
            appendDec();
            break;

        case 'Backspace':
            document.getElementById('ce').style.backgroundColor = keyPressColor;
            clearEntry();
            break;

        case '+': case '-': case '*': case '/': case '=':
            document.getElementById(e.key).style.backgroundColor = keyPressColor;
            appendMathOperator(e.key);
            break;

        case 'Enter':
            document.getElementById('=').style.backgroundColor = keyPressColor;
            equateMath();
            break;
    }

    // if (e.code === 'Backspace') {
    //     console.log(e.code);
    // }
}

// function resetButton(elementID) {
//     document.getElementById(elementID).style.backgroundColor = buttonBackColor;
// }



function mouseDownClear() {
    longMousePress = true;
    setTimeout(clearAll, 1000);
}

function mouseUpClear() {
    longMousePress = false;
}

function clearAll() {
    if (longMousePress === false) {return;}
    mathBuild.clearAll();
    mathBuild = new mathMaker();
}

function clearEntry() {
    mathBuild.clearEntry();
}

// window.addEventListener('load', pageLoad);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);