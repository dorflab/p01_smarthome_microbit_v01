input.onLogoEvent(TouchButtonEvent.Touched, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P13, 350)
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P8, 180)
    basic.pause(10000)
    pins.servoWritePin(AnalogPin.P8, 0)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P9, 180)
    basic.pause(15000)
    pins.servoWritePin(AnalogPin.P9, 0)
    basic.pause(2000)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
})
let rgb_index = 0
let B = 0
let G = 0
let R = 0
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)
let strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P8, 0)
pins.servoWritePin(AnalogPin.P9, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("Willkommen in", 1, 0)
I2C_LCD1602.ShowString("Mikas Haus", 3, 1)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P16, 1000)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 800)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 600)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 400)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 200)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 200)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 400)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 600)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 800)
    basic.pause(200)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showIcon(IconNames.Yes)
        I2C_LCD1602.BacklightOn()
        I2C_LCD1602.clear()
        basic.pause(100)
        I2C_LCD1602.ShowString("Hallo", 5, 0)
    } else {
        basic.showIcon(IconNames.Happy)
        I2C_LCD1602.clear()
        I2C_LCD1602.BacklightOff()
    }
})
basic.forever(function () {
    R = 0
    G = 0
    B = 0
    strip.clear()
    R = 0
    G = 0
    B = 100
    rgb_index = 0
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    R = 100
    G = 0
    B = 0
    rgb_index = 1
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    R = 0
    G = 100
    B = 0
    rgb_index = 2
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    R = 100
    G = 100
    B = 100
    rgb_index = 3
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    basic.pause(500)
    strip.show()
})
