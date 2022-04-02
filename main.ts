input.onButtonPressed(Button.A, function () {
    timerON = true
    buttonTime = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (timerON) {
        basic.showLeds(`
            . . . . #
            . . . . #
            # . . # .
            # . # . .
            . # . . .
            `)
        timerON = false
    }
})
let buttonTime = 0
let timerON = false
timerON = false
basic.showNumber(5)
let buttonDelay = 5000
loops.everyInterval(200, function () {
    if (timerON) {
        if (input.runningTime() - buttonTime > 1000) {
            basic.showNumber(4)
        }
        if (input.runningTime() - buttonTime > 2000) {
            basic.showNumber(3)
        }
        if (input.runningTime() - buttonTime > 3000) {
            basic.showNumber(2)
        }
        if (input.runningTime() - buttonTime > 4000) {
            basic.showNumber(1)
        }
        if (input.runningTime() - buttonTime > 5000) {
            timerON = false
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
