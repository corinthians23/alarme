input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("G A C5 C5 C5 A G G ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
