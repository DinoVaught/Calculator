const specOperators = {
    'plusMinus': '+/-',
    'sqrRoot': 'sqr',
    'percent': '%',
    'multInverse': '1/x',
};

let ledBackColor;

class mathMaker {
    constructor() {
        this.evalEquation = '0';
    }

    appendNumber(datum) {

        if (this.evalEquation === '0') {this.evalEquation = ''}

        if (datum === '0') {
            if (this.paddingZerosLeft()) {return;}
        } else {
            if (this.evalEquation !== '') {
                let evalChars = this.evalEquation.split(" ");
                let targetChars = evalChars[evalChars.length -1];
                if (targetChars !== undefined) {
                    if (targetChars.substr(0, 1) === '0') {
                        this.evalEquation = this.evalEquation.substr(0, this.evalEquation.length -1);
                    }
                }
            }

            // if (this.evalEquation.substr(this.evalEquation.length -1) === '0') {
            //     this.evalEquation = this.evalEquation.substr(0, this.evalEquation.length -1);
            // }
        }

        this.evalEquation += datum;
        document.getElementById('ledPanel').innerText = this.evalEquation;
    }

    appendDec() {
        if (this.evalEquation === '0') {
            this.evalEquation = '.';
            document.getElementById('ledPanel').innerText = this.evalEquation;
        } else {
            let evalChars = this.evalEquation.split(" ");
            let targetData = evalChars[evalChars.length -1]
            if (targetData.indexOf('.') > -1) {
                this.flashLed();
            } else {
                this.evalEquation += '.';
                document.getElementById('ledPanel').innerText = this.evalEquation;
            }
        }
    }

    paddingZerosLeft() {
        if (this.evalEquation === '0') {return false;}
        if (this.evalEquation === '') {return false;}
        if (this.evalEquation.substr(this.evalEquation.length -1) === ' ') {return;}

        let evalChars = this.evalEquation.split(" ");
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

    validateMathOperator(){
        this.evalEquation = this.evalEquation.toString();

        if (this.evalEquation.length === 0) {
            return false;
        }
        if (this.evalEquation === '0') {
            return false;
        }

        if (this.evalEquation.length > 2) {
            return this.rightCharIsMathOperator();
        }
            return true;
    }

    rightCharIsMathOperator() {
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
        this.applySpecialOperator(specOperators.plusMinus);
    }

    squareRoot() {

        if (this.evalEquation === '0') {return;}
        if (this.isNumber(this.evalEquation)) {
            this.evalEquation = Math.sqrt(parseFloat(this.evalEquation)).toString();
            document.getElementById('ledPanel').innerText = this.evalEquation;
            return;
        }

        this.applySpecialOperator(specOperators.sqrRoot);
    }

    percent() {

        if (this.evalEquation === '0') {return;}
        if (this.isNumber(this.evalEquation)) {
            this.evalEquation = eval(this.evalEquation + ' / 100');
            document.getElementById('ledPanel').innerText = this.evalEquation;
            return;
        }

        this.applySpecialOperator(specOperators.percent);
    }

    multInverse() {
        if (this.evalEquation === '0') {return;}
        if (this.isNumber(this.evalEquation)) {
            this.evalEquation = eval('1 / ' + this.evalEquation);
            document.getElementById('ledPanel').innerText = this.evalEquation;
            return;
        }

        this.applySpecialOperator(specOperators.multInverse);
    }


    applySpecialOperator(operator) {
        this.evalEquation = this.evalEquation.toString();

        let evalChars = this.evalEquation.split(" ");
        if (this.isNumber(evalChars[evalChars.length - 1])) {

            switch (operator) {
                case specOperators.plusMinus:
                    evalChars[evalChars.length - 1] = eval(evalChars[evalChars.length - 1] + ' * -1');
                    break;

                case specOperators.sqrRoot:
                    evalChars[evalChars.length - 1] = Math.sqrt(parseFloat(evalChars[evalChars.length - 1])).toString();
                    break;

                case specOperators.percent:
                    evalChars[evalChars.length - 1] = eval(evalChars[evalChars.length - 1] + ' / 100');
                    break;

                case specOperators.multInverse:
                    evalChars[evalChars.length - 1] = eval('1 / ' + evalChars[evalChars.length - 1]);
                    break;
            }

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
        try {
            if (eval(this.evalEquation) === undefined ) {return;} // invalid equation
            let evalResult = eval(this.evalEquation).toString();
            if (evalResult.indexOf('Infinity') !== -1) {
                this.flashLed();
                return;
            }
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
        catch(err) {
            this.flashLed();
        }
    }

    clearEntry() {
        document.getElementById('ledPanel').innerText = '0';
        if (this.evalEquation === '0') {
            return;
        } else {
            this.evalEquation = this.evalEquation.toString(); // this.evalEquation.substr is not a function

            if (this.evalEquation.substr(this.evalEquation.length - 1) === ' ') {
                this.evalEquation = this.evalEquation.substr(0, this.evalEquation.length - 3);
            } else {
                this.evalEquation = this.evalEquation.substr(0, this.evalEquation.length - 1);
            }


            if (this.evalEquation.length === 0) {this.evalEquation = '0';}
            document.getElementById('ledPanel').innerText = this.evalEquation;
        }
    }

    clearAll() {
        this.evalEquation = '';
        document.getElementById('ledPanel').innerText = '0';
    }

    flashLed() {

        // ledBackColor = document.getElementById('ledPanel').style.backgroundColor;
        document.getElementById('ledPanel').style.backgroundColor = "#fa0505";
        setTimeout(this.resetLed, 200);
    }
    resetLed() {
        document.getElementById('ledPanel').style.backgroundColor = ledBackColor;
    }

    isNumber(val) {
        if (val === '') {return false;}
        return !isNaN(val);
    }

}