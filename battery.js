const LOG = console.log;

function Battery() {
    this.getEnergy = function () {
        return this.energy;
    };

    this.setEnergy = function (energy) {
        this.energy = energy;
    };

    this.decreaseEnergy = function () {
        if (this.energy > 1) {
            this.energy--;
        }else {
            LOG('Hay cam sac pin truoc khi sap nguon')
        }
    };

    this.loadedEnergy = function (status) {
        if (status) {
            this.energy++;
        } else {
            LOG("Pin hien tai la: " + this.energy + "% ban co muon cam sac khong ?")
        }
    };

}

module.exports = Battery;// su dung trong moi truong nodejs
