class Head {
    constructor() {
        let state = "q0";
        let location = 0;
        this.update(state, location)
    }
    update(state, location) {
        this.state = state;
        this.location = location
    }
}

export default Head