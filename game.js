const gameContainer = document.getElementById("game-container");
const resetButton = document.getElementById("reset-button");

drawBoard(16); // initial board set up
resetButton.addEventListener('click', promptUserAndReset);

function drawBoard(gridWidth) {
    for (let i = 0; i < gridWidth*gridWidth; i++) {
        let li = document.createElement('div');
        li.classList.add('square');
        let squareSize = 600/gridWidth + "px"
        li.style.width = squareSize;
        li.style.height = squareSize;
        li.addEventListener('mouseover', () => { li.style.backgroundColor = "#444444"})
        gameContainer.appendChild(li);
    }
}

function resetBoard(gridWidth) {
    // remove existing elements
    while (gameContainer.firstChild) {
        gameContainer.removeChild(gameContainer.firstChild);
    }
    drawBoard(gridWidth);
}

function promptUserAndReset() {
    let newWidth = prompt("Enter a new width");
    if (newWidth >= 2) {
        resetBoard(newWidth);
    } else {
        resetBoard(16);
    }
}
