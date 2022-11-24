let bonbon = false
let etat_passé = 0
let etat_actuel = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passé && etat_actuel == 1) {
        bonbon = false
    } else {
        bonbon = true
    }
})
basic.forever(function () {
    if (bonbon == true) {
        servos.P0.setAngle(60)
        basic.pause(2000)
    }
    servos.P0.setAngle(150)
})
