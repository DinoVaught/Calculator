
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

function allClear() {
    mathBuild = new mathMaker();
    mathBuild.clearAll();
}

function changeOfSign() {
    mathBuild.changeSign();
}