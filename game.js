let gridWidth = 16;

console.log("Hello World");

const gameContainer = document.getElementById("game-container");

for (let i = 0; i < gridWidth*gridWidth; i++) {
    let li = document.createElement('div');
    li.classList.add('square');
    li.addEventListener('mouseover', () => { li.style.backgroundColor = "#AAAAAA"})
    gameContainer.appendChild(li);
}

