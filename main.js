
let longMousePress = false;
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

function clearIt() {
    mathBuild.clearEntry();
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
function pageLoad() {
    ledBackColor = document.getElementById('ledPanel').style.backgroundColor;
}

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

window.addEventListener('load', pageLoad);