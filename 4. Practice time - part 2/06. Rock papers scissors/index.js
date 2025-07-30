let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function randomItem() {
    len = hands.length

    let random = Math.floor(Math.random() * len)
    console.log(hands[random])

}

randomItem()