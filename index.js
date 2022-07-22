//TODO like function
//TODO dislike function
//TODO get new dog function
//TODO end of array function
//TODO rendering function
import Dog from "./Dog.js"
import data from "./data.js"

// Variables // 
// let currentDogIndex = 0
let dogArray = ["rex", "bella", "teddy", "bernie"]
let currentDog = getNextDog()
let isWaiting = false

// Event Listeners //
document.getElementById("like-btn").addEventListener("click", liked)

// Functions //
function getNextDog() {
    const nextDogData = data[dogArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}

function liked() {
    if (!isWaiting) {
        console.log("like btn clicked")
        isWaiting = true
        currentDog.hasBeenLiked = true
        setTimeout(() => {
            getNextDog()
            render()
            isWaiting = false
            console.log("time passed")
        }, 2000)
    } else {
        console.log("something messed up")
    }
}

// function noped() {
//     if (!isWaiting) {
//         //TODO turn on isWaiting, hasBeenSwiped, render, get new dog
//     }
// }

function render() {
    document.getElementById("card").innerHTML = currentDog.getDogHtml()
}

render()

