
class mathMaker {
    constructor() {
        this.evalEquation = '';
    }

    appendNumber(datum) {
        this.evalEquation += datum;
        // console.log(this.evalEquation);
        document.getElementById('ledPanel').innerText = this.evalEquation;
    }

    appendOperator(datum) {
        datum = ` ${datum} `;
        if (this.validateMathOperator(datum) === false) {return;}
        this.evalEquation += datum;
        // console.log(this.evalEquation);
        document.getElementById('ledPanel').innerText = this.evalEquation;
    }

    validateMathOperator(operator){
        if (this.evalEquation.length === 0) {
            return false;
        }
        let len = this.evalEquation.length;

        // [' / ',' * ',' - ',' + ']
        console.log(this.evalEquation.substr(len - operator.length, operator.length));
        return true;
    }

    evaluateEquation(){

        if (eval(this.evalEquation) === undefined ) {return;} // invalid equation

        let evalResult = eval(this.evalEquation).toString();
        if (evalResult.indexOf('.') !== -1) {
            let numDecs = evalResult.length;
            numDecs -= (evalResult.indexOf('.') + 1);
            if (numDecs > 4) {
                evalResult = parseFloat(evalResult).toFixed(4).toString();
            }
        }
        document.getElementById('ledPanel').innerText = evalResult.toString();
        this.evalEquation = evalResult;
    }

    clearAll() {
        document.getElementById('ledPanel').innerText = '0';
        this.evalEquation = '';
    }

}