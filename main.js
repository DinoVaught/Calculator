
const timeSpans = {
    'current': 0,
    'mouseDown': 0
};

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

funRewrote the keyUp and keyDown functions
Coded background-color (reset) to empty strings '', apparently setting the background color back to its (css specified) colorction inverse() {
    mathBuild.multInverse();
}

function mouseDownClear() {

    timeSpans.mouseDown = new Date().getTime();
    setTimeout(clearAll, 1000);
}

function clearAll() {

    timeSpans.current = new Date().getTime()
    if ((timeSpans.current - timeSpans.mouseDown) < 1000) {return;}

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

function wasteTime(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}