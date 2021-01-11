
class mathMaker {
    constructor() {
        this.evalEquation = '0';
    }

    appendNumber(datum) {
        if (this.evalEquation === '0') {this.evalEquation = ''}
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
        if (this.evalEquation.length > 2) {
            return this.rightCharIsMathOperator(operator);
        }
            return true;
    }

    rightCharIsMathOperator(operator) {
        let len = this.evalEquation.length;
        switch(this.evalEquation[len-2]) {
            case '+': case '-': case '*': case '/':
                return false;
        }
        return true;
    }

    changeSign() {

        if (this.evalEquation === '0') {return;}

        if (this.isNumber(this.evalEquation)) {
            this.evalEquation = eval(this.evalEquation + ' * -1').toString();
            document.getElementById('ledPanel').innerText = this.evalEquation;
            return;
        }

        this.evalEquation = this.evalEquation.toString();
        let evalChars = this.evalEquation.split(" ");

        if (this.isNumber(evalChars[evalChars.length-1])) {

            evalChars[evalChars.length-1] = eval(evalChars[evalChars.length-1] + ' *-1');

            let tmp = '';
            for (let i = 0; i < evalChars.length; i++) {
                tmp += evalChars[i] + ' ';
            }
            tmp = tmp.substr(0, tmp.length - 1).toString(); // remove the last ' ' ;
            this.evalEquation = tmp;
            document.getElementById('ledPanel').innerText = this.evalEquation;
        }


    }
    evaluateEquation() {

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

    isNumber(val) {
        return !isNaN(val);
    }

}