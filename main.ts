input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.forward()
    } else {
        cuteBot.backforward()
    }
})
