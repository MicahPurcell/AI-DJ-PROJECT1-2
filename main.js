function setup(){
    canvas = createCanvas(500,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

song1 = ""
song2 = ""

function preload(){
    song1 = loadSound("unstoppable.mp3")
    song2 = loadSound("believer.mp3")
}

function draw(){
    image(video, 0, 0, 5ppppppppppppppppppppp00, 400)
}