let nbre_pas = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(nbre_pas)
})
input.onButtonPressed(Button.AB, function () {
    nbre_pas = 0
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        nbre_pas += 1
    }
})
