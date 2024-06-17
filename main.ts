let motor_max = 255
let motor_l = 0
let motor_r = 0
let nullpunkt_tol = 10
let beschleunigung_x = 0
let geschw_red = 0
loops.everyInterval(100, function () {
    if (true) {
        motor_l = motor_max
        motor_r = motor_max
    }
    beschleunigung_x = input.acceleration(Dimension.X)
    geschw_red = Math.abs(beschleunigung_x) / 1023 * motor_max
    if (Math.abs(beschleunigung_x) > nullpunkt_tol) {
        if (beschleunigung_x < 0) {
            motor_l = motor_l - geschw_red
        }
        if (beschleunigung_x > 0) {
            motor_r = motor_r - geschw_red
        }
    }
    basic.setLedColors(basic.rgb(motor_l, 0, 0), 0x000000, basic.rgb(motor_r, 0, 0))
})
