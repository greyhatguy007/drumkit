// var sound = new Audio("./sounds/crash.mp3")

for (const button of document.querySelectorAll(".drum")) {
    button.addEventListener("click", () => {
        l = button.innerHTML;
        playSound(l)
    })
}



document.addEventListener("keydown", function(event) {
    playSound(event.key);
})

function playSound(l) {
    switch (l) {
        case "w":
            new Audio("./sounds/crash.mp3").play()
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play()
            break;
        case "s":
            new Audio("./sounds/snare.mp3").play()
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play()
            break;
        case "j":
            new Audio("./sounds/tom-2.mp3").play()
            break;
        case "k":
            new Audio("./sounds/tom-3.mp3").play()
            break;
        case "l":
            new Audio("./sounds/tom-4.mp3").play()
            break;
        default:
            break;
    }
}