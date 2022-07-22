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
let currentDog = new Dog(data[dogArray])
let isWaiting = false

// Functions //
// function getNextDog() {
//     const nextDogData = dogData[dogArray.shift()]
//     return nextDogData ? new Dog(nextDogData) : {}
// }

// function liked() {
//     if (!isWaiting) {
//         //TODO turn on isWaiting, hasBeenLiked, render, get new dog
//         isWaiting = true
//         currentDog.hasBeenLiked = true
//         render()
//     }
// }

// function noped() {
//     if (!isWaiting) {
//         //TODO turn on isWaiting, hasBeenSwiped, render, get new dog
//     }
// }

function render() {
    document.getElementById("card").innerHTML = bernie.getDogHtml()
//needs to grab getDogHtml() and render out on page similar to RPG
}
const bernie = new Dog(data.bernie)
// document.getElementById("like-btn").addEventListener("click", liked)
render()

