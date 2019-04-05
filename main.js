var Turn = require('./power');
var Battery = require('./battery');
var PlugTheCharger = require('./charging');

const LOG = console.log;

let turnOn = new Turn();
turnOn.setTurn(true);
let turn = turnOn.getTurn();
if (turn) {
    LOG("Phone is working");
}

let charging = new PlugTheCharger();
charging.setPlug(false);
let charged = charging.getPlug();
if (charged) {
    LOG("Phone is charging");
}

let battery = new Battery();
battery.setEnergy(90);
// battery.decreaseEnergy();
battery.loadedEnergy(charged);

LOG(battery.getEnergy() + "%");









