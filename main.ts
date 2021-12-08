let lumière = 0
function blanche () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
basic.forever(function () {
    lumière = pins.digitalReadPin(DigitalPin.P0)
    if (lumière > 550) {
        vert()
    }
    if (lumière < 450) {
        rouge()
    }
    if (lumière <= 450 && lumière >= 550) {
        blanche()
    }
    basic.showNumber(lumière)
})
