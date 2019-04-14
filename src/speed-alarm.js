function SpeedAlarm(speedo) {
    this.speedo = speedo
}

SpeedAlarm.prototype.check = function() {
    if (this.speedo.speed() > 50) {
        return false;
    } else {
        return true;
    }
}

module.exports = SpeedAlarm;