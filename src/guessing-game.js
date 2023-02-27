class GuessingGame {
    range = []

    constructor() {

    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.range.push(i);
        }
    }

    guess() {
        return this.range[Math.floor(this.range.length/2)];
    }

    lower() {
        this.range = this.range.slice(0 , this.range.indexOf(this.guess()))
    }

    greater() {
        this.range = this.range.slice(this.range.indexOf(this.guess()) + 1, this.range.length)
    }
}

module.exports = GuessingGame;