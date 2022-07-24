//TODO like function
//TODO dislike function
//TODO get new dog function
//TODO end of array function
//TODO rendering function
import Dog from "./Dog.js"
import data from "./data.js"

// Variables // 
let dogArray = ["bernie", "skeeter", "irene", "carol", "hank"]
let currentDog = getNextDog()
let isWaiting = false


// Event Listeners //
document.getElementById("like-btn").addEventListener("click", liked)
document.getElementById("dislike-btn").addEventListener("click", noped)

// Functions //
function getNextDog() {
    const nextDogData = data[dogArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}

function liked() {
    if (!isWaiting) {
        isWaiting = true
        currentDog.hasBeenLiked = true
        let likeBadge = document.getElementById('badge-img')
        likeBadge.innerHTML = `<img class="badge" src="images/badge-like.png">`
        setTimeout(() => {
            currentDog = getNextDog()
            render()
            isWaiting = false
        }, 2000)
    }
}

function noped() {
    if (!isWaiting) {
        isWaiting = true
        currentDog.hasBeenSwiped = true
        let nopeBadge = document.getElementById('badge-img')
        nopeBadge.innerHTML = `<img class="badge" src="images/badge-nope.png">`
        setTimeout(() => {
            currentDog = getNextDog()
            render()
            isWaiting = false
        }, 2000)
    }
}

function render() {
    document.getElementById("card").innerHTML = currentDog.getDogHtml()
}

render()

