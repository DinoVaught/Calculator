
class mathMaker {
    constructor() {
        this.evalEquation = '0';
    }

    appendNumber(datum) {

        if (this.evalEquation === '0') {this.evalEquation = ''}

        if (datum === '0') {
            if (this.paddingZerosLeft()) {return;}
        }

        this.evalEquation += datum;
        document.getElementById('ledPanel').innerText = this.evalEquation;
    }
    paddingZerosLeft() {
        if (this.evalEquation === '0') {return false;}
        if (this.evalEquation === '') {return false;}
        let evalChars = this.evalEquation.split(" ");
        // return (evalChars[evalChars.length-1].substr(0, 1) === '0');

        switch (evalChars[evalChars.length-1].substr(0, 1)) {
            case '0': case '':
                return true;

            default:
                return false;
        }

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
            // change sign (+/-) of last element
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

            let startPos = evalResult.indexOf('.') + 1;
            let targetData = evalResult.substring(startPos);
            let numDecs = targetData.length;

            if (numDecs > 4) {
                evalResult = parseFloat(evalResult).toFixed(4).toString();
            }
        }
        document.getElementById('ledPanel').innerText = evalResult.toString();
        this.evalEquation = evalResult;
    }

    squareRoot() {
        if (this.isNumber(this.evalEquation) === false) {return;}
        if (parseFloat(this.evalEquation) < 0 ) {return;}

        this.evalEquation = Math.sqrt(parseFloat(this.evalEquation));
        document.getElementById('ledPanel').innerText = this.evalEquation;
    }

    clearAll() {
        document.getElementById('ledPanel').innerText = '0';
        this.evalEquation = '0';
    }

    isNumber(val) {
        if (val === '') {return false;}
        return !isNaN(val);
    }

}