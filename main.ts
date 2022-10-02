let rgb_index = 0
let B = 0
let G = 0
let R = 0
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)
let strip = neopixel.create(DigitalPin.P14, 4, NeoPixelMode.RGB)
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
    R = 0
    G = 0
    B = 0
    strip.clear()
    B = 255
    rgb_index = 0
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    B = 0
    G = 255
    rgb_index = 1
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    G = 0
    R = 255
    rgb_index = 2
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    B = 100
    R = 100
    rgb_index = 3
    strip.setPixelColor(rgb_index, neopixel.rgb(R, G, B))
    basic.pause(500)
    strip.show()
})
