const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

document.addEventListener("keypress",(event) =>{
    console.log(event.key)
    const keyPressed = event.key.toLowerCase()
    if (keyPressed === "q"){
        boom.play()
    } else if (keyPressed === "w"){
        clap.play()
    } else if (keyPressed === "e"){
        hihat.play()
    } else if (keyPressed === "r"){
        kick.play()
    } else if (keyPressed === "t"){
        openhat.play()
    } else if (keyPressed === "y"){
        ride.play()
    } else if (keyPressed === "u"){
        snare.play()
    } else if (keyPressed === "i"){
        tink.play()
    } else if (keyPressed === "o"){
        tom.play()
    }
})
