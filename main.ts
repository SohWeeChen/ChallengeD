input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ds > 1) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 0)
    }
})
let ds = 0
ds = 0
basic.forever(function () {
    ds = Tinybit.Ultrasonic_Car()
})
