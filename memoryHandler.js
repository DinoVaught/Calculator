
class memoryHandler {
    constructor() {
        this.memoryValue = '0';
    }

    memoryPlus(num) {
        this.memoryValue = eval(this.memoryValue + ' + ' + num);
    }

    memoryMinus(num) {
        this.memoryValue = eval(this.memoryValue + ' - ' + num);
    }

    memoryClear() {
        this.memoryValue = '0';
    }

}