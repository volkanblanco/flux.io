
window.onload = function () {
	let screen1 = document.querySelector('.screen1')
	let introVideo = document.createElement('video')
	introVideo.loop = true
	let source = document.createElement('source')
	source.src = "./static/3d-Lightning-front-1080p.mov"

	introVideo.appendChild(source)

	screen1.appendChild(introVideo)
	introVideo.play()
}