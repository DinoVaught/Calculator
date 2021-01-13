
let mathBuild = new mathMaker();

function appendNum(datum) {
    mathBuild.appendNumber(datum);
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
//  Inverse