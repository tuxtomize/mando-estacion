radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("temperatura")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "alarma") {
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 B C5 B C5 B C5 B ", 120)
        }
    }
    if (receivedString == "apagar pantalla") {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("luz")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (pantalla == true) {
        pantalla = false
    } else {
        pantalla = true
    }
})
let pantalla = false
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.pause(1000)
basic.clearScreen()
pantalla = false
basic.forever(function () {
    if (pantalla == true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        radio.sendString("encender pantalla")
    } else {
        radio.sendString("apagar pantalla")
    }
})
