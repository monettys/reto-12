basic.clearScreen()
let x = 0
let tiempo = 200
basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(tiempo)
        led.toggle(x, 0)
        basic.pause(tiempo)
    }
})
basic.forever(function () {
    x = 0
    while (x < 5) {
        led.plot(x, 0)
        basic.pause(tiempo)
        led.toggle(x, 0)
        basic.pause(tiempo)
        x += 1
    }
})
