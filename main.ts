/**
 * User Chooses 0 - 9 using BUTTON_A
 * 
 * Press BUTTON_B to send to remote MicroBit
 * 
 * Press BUTTON A+B to reset
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Answer)
    Answer += 1
    if (Answer > 9) {
        Answer = 0
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Answer)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let Answer = 0
radio.setGroup(42)
basic.showLeds(`
    . # . . .
    # . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
