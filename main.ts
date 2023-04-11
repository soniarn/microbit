input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 3)
    if (Número_aleatorio == 2) {
        basic.showString("SI")
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (Número_aleatorio == 1) {
        basic.showString("NO")
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (Número_aleatorio == 4) {
        basic.showString("NO SÉ")
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (Número_aleatorio == 5) {
        basic.showString("QUIZÁS")
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (Número_aleatorio == 2) {
        basic.showString("TAL VEZ")
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("SIEMPRE")
        music.playTone(440, music.beat(BeatFraction.Breve))
    }
    basic.showNumber(8)
})
let Número_aleatorio = 0
basic.showString("Haz me una pregunta")
basic.showNumber(8)
