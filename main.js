
const timeSpans = {
    'current': 0,
    'mouseDown': 0
};

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

let mouseButtonDown = false;
function mouseDownClear() {

    mathBuild.clearEntry();
    mouseButtonDown = true;
    timeSpans.mouseDown = new Date().getTime();
    setTimeout(clearAll, 1000);
}

function mouseUpClear() {
    mouseButtonDown = false;
    console.log('mouseUpClear')
}


function clearAll() {

    timeSpans.current = new Date().getTime()
    if ((timeSpans.current - timeSpans.mouseDown) < 1000) {return;}
    if (mouseButtonDown === false) {return;}

    mathBuild.clearAll();
    mathBuild = new mathMaker();
}

function clearEntry() {
    /* this for the call from keyPressHandler.js */
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

/*
function wasteTime(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}*/
