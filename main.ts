let getal = 0
input.onGesture(Gesture.Shake, function () {
    getal = randint(1, 6)
    basic.showNumber(getal)
    basic.pause(2000)
    basic.clearScreen()
})
