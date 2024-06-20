function SerielleAusgabe () {
    serial.writeValue("l1= ", l1)
    serial.writeValue("l2= ", l2)
    serial.writeValue("l3= ", l3)
    serial.writeValue("l4= ", l4)
    serial.writeValue("l5= ", l5)
    serial.writeValue("l6= ", l6)
    serial.writeValue("lenkwinkel= ", lenkwinkel)
}
let beschleunigung_y = 0
let beschleunigung_x = 0
let lenkwinkel = 0
let l6 = 0
let l5 = 0
let l4 = 0
let l3 = 0
let l2 = 0
let l1 = 0
serial.redirectToUSB()
let motor_max = 255
let motor_l = 0
let motor_r = 0
let nullpunkt_tol = 10
let geschw_red = 0
loops.everyInterval(100, function () {
    beschleunigung_x = input.acceleration(Dimension.X)
    beschleunigung_y = input.acceleration(Dimension.Y)
    l1 = beschleunigung_x ** 2
    l2 = beschleunigung_y ** 2
    l3 = l1 + l2
    l4 = Math.sqrt(l3)
    l5 = beschleunigung_x / l4
    l6 = -1 * l5
    lenkwinkel = Math.acos(l6)
    SerielleAusgabe()
    geschw_red = Math.abs(beschleunigung_x) / 1023 * motor_max
    if (Math.abs(beschleunigung_x) > nullpunkt_tol) {
        if (0 < 0) {
            motor_l = motor_l - geschw_red
        }
        if (beschleunigung_x > 0) {
            motor_r = motor_r - geschw_red
        }
    }
    basic.setLedColors(basic.rgb(motor_l, 0, 0), 0x000000, basic.rgb(motor_r, 0, 0))
})
