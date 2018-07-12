function Letter() {
    this.char = "",
        this.isGuessed = false,
        this.getChar = function () {
            if (this.isGuessed) {
                return this.char
            }
            else {
                return "_ "
            }
        }
    this.guess = function (letter) {
        if (letter.toLowerCase() === this.char.toLowerCase()) {
            return this.isGuessed = true;
        }
        else {
            return false;
        }
    }
}

module.exports.Letter = Letter