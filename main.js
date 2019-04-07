
// su dung trong moi truong nodejs nen dung require
var Turn = require('./power');
var Battery = require('./battery');
var PlugTheCharger = require('./charging');

const LOG = console.log;

//bat/tat nguon
let turnOn = new Turn();
turnOn.setTurn(true);
let turn = turnOn.getTurn();
if (turn) {
    LOG("Phone is working");
}

//sac pin
let charging = new PlugTheCharger();
charging.setPlug(false);
let charged = charging.getPlug();
if (charged) {
    LOG("Phone is charging");
}

//trang thai pin
let battery = new Battery();
battery.setEnergy(90);
// battery.decreaseEnergy();
battery.loadedEnergy(charged);

LOG(battery.getEnergy() + "%");









