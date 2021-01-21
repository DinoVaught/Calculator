
let longMousePress = false;
let keyPressColor = "#f5e242";
let mathBuild = new mathMaker();
let memory = new memoryHandler();

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

function memoryClear() {
    mathBuild.clearAll();
    memory.memoryClear();
    mathBuild.appendNumber(memory.memoryValue);
}

function memoryRecall() {
    mathBuild.clearAll();
    document.getElementById('ledPanel').innerText = memory.memoryValue;
    mathBuild.appendNumber(memory.memoryValue);
}

function memoryPlus() {
    let val =document.getElementById('ledPanel').innerText;
    if (mathBuild.isNumber(val)) {
        memory.memoryPlus(val);
    }

}

function memoryMinus() {
    let val =document.getElementById('ledPanel').innerText;
    if (mathBuild.isNumber(val)) {
        memory.memoryMinus(val);
    }

}