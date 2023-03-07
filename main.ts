let que = ""
input.onButtonPressed(Button.A, function () {
    que = "LUZ"
})
input.onButtonPressed(Button.B, function () {
    que = "TEMPERATURA"
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.lightLevel()))
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.temperature()))
    }
})
