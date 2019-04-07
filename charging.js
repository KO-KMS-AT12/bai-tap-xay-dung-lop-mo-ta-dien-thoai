function PlugTheCharger() {
    this.setPlug = function (status) {
        this.status = status;
    }
    this.getPlug = function () {
        return this.status;
    }
}

module.exports = PlugTheCharger;// su dung trong moi truong nodejs
