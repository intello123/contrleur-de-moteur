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
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
basic.forever(function () {
    lumière = pins.map(
    0,
    0,
    1023,
    0,
    2
    )
    if (lumière == 0) {
        rouge()
    }
    if (lumière == 1) {
        vert()
    }
    if (lumière == 2) {
        blanche()
    }
})
