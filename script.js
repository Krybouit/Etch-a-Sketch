const gridContainer = document.getElementById("grid-container");
const button = document.querySelector("button");

button.addEventListener("click", gridSize);


function gridSize() {
let sizeNumber = prompt("Choose grid size from (2-100)");
if (sizeNumber > 100 || sizeNumber == 0 ||  sizeNumber == 1 || isNaN(sizeNumber)) {
    alert("Please choose a number between (2-100)");
    return gridSize();
}
gridContainer.style.gridTemplateColumns = `repeat(${sizeNumber}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${sizeNumber}, 1fr)`;
box(sizeNumber);
}

function resetGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function box(size) {
    resetGrid(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.setAttribute("class","box");
        gridContainer.appendChild(square);
        square.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        })    
        
    }
}

box(16);

  









