class Tape {
    constructor(string) {
        this.tape = Tape.parse(string)
    }
    get status() {
        return this.tape.join(" ")
    }
    extendLeft() {
        this.tape.unshift("B")
    }
    extendRight() {
        this.tape.push("B")
    }
    write(symbol, location) {
        this.tape[location] = symbol
    }
    static parse(string) {
        return string.split(" ")
    }
}