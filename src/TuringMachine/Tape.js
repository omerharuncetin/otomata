class Tape {
    constructor(string) {
        this.tape = Tape.parse(string)
    }
    get status() {
        return this.tape.join("")
    }
    extendLeft() {
        this.tape.unshift(" ")
    }
    extendRight() {
        this.tape.push(" ")
    }
    write(symbol, location) {
        this.tape[location] = symbol
        //yer degistirme yapılması lazım
    }
    static parse(string) {
        return string.split("")
    }
}

export default Tape