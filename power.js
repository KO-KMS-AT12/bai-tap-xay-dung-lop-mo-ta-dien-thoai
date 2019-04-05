function Turn() {
    this.getTurn = function () {
        return this.status;
    };
    this.setTurn = function (status) {
        this.status = status;
    }
}

module.exports = Turn;

