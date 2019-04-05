function Battery() {
    this.getEnergy = function () {
        return this.energy;
    };

    this.setEnergy = function (energy) {
        this.energy = energy;
    };

    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    };

    this.loadedEnergy = function (status) {
        if (status) {
            this.energy++;
        } else {
            LOG("Pin hien tai la: " + this.energy + "% ban co muon cam sac khong")
        }
    };

}

module.exports = Battery;
