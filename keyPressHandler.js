let keyPressColor = "#f5e242";

function keyUp(e) {

    switch (e.key) {

        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '+': case '-': case '*': case '/': case '=':
            document.getElementById(e.key).style.backgroundColor = '';
            break;

        case 'Backspace':
            document.getElementById('ce').style.backgroundColor = '';
            break;

        case 'Enter':
            document.getElementById('=').style.backgroundColor = '';
            break;

        case '.':
            document.getElementById('dec').style.backgroundColor = '';
            break;
    }

}

function keyDown(e) {

    // console.log(e.key);

    switch (e.key) {

        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            document.getElementById(e.key).style.backgroundColor = keyPressColor;
            appendNum(e.key)
            break;

        case '.':
            document.getElementById('dec').style.backgroundColor = keyPressColor;
            appendDec();
            break;

        case 'Backspace':
            document.getElementById('ce').style.backgroundColor = keyPressColor;
            clearEntry();
            break;

        case '+': case '-': case '*': case '/': case '=':
            document.getElementById(e.key).style.backgroundColor = keyPressColor;
            appendMathOperator(e.key);
            break;

        case 'Enter':
            document.getElementById('=').style.backgroundColor = keyPressColor;
            equateMath();
            break;
    }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);