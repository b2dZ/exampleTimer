input.onButtonPressed(Button.A, function () {
    timerON = true
    buttonTime = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (timerON) {
        elapsedTime = input.runningTime() - buttonTime
        if (elapsedTime > 5000) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                . . . . #
                . . . . #
                # . . # .
                # . # . .
                . # . . .
                `)
        }
    }
})
let buttonTime = 0
let elapsedTime = 0
let timerON = false
timerON = false
basic.showNumber(5)
elapsedTime = 0
basic.forever(function () {
    if (timerON) {
    	
    }
})
