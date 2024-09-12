/*---Storage of Game Data---*/
var gameData = {
  wood: 0
}

/*---Button Functions---*/
// Chopping
const woodCounter = document.getElementById("wood-counter")
const chopButton = document.getElementById("chop-button")
chopButton.addEventListener('click', function() {
  gameData.wood += 1
  woodCounter.textContent = gameData.wood
})

