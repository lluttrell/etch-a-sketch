const gameContainer = document.getElementById("game-container");
const resetButton = document.getElementById("reset-button");

drawBoard(16); // initial board set up

function drawBoard(gridWidth) {
    for (let i = 0; i < gridWidth*gridWidth; i++) {
        let li = document.createElement('div');
        li.classList.add('square');
        let squareSize = 600/gridWidth + "px"
        li.style.width = squareSize;
        li.style.height = squareSize;
        li.addEventListener('mouseover', () => { li.style.backgroundColor = "#AAAAAA"})
        gameContainer.appendChild(li);
    }
}
