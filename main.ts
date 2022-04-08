input.onButtonPressed(Button.A, function () {
    timerRUNNING = true
    startTime = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (timerRUNNING) {
        basic.showLeds(`
            . . . . #
            . . . . #
            # . . # .
            # . # . .
            . # . . .
            `)
        timerRUNNING = false
    }
})
let secRemain = 0
let startTime = 0
let timerRUNNING = false
timerRUNNING = false
let milliSecLEFT = 5000
basic.showNumber(milliSecLEFT / 1000)
loops.everyInterval(200, function () {
    if (timerRUNNING) {
        secRemain = Math.idiv(input.runningTime() - startTime, 1000)
        basic.showNumber(5 - secRemain)
        if (input.runningTime() - startTime > 5000) {
            timerRUNNING = false
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
