const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clearBtn");
const sliderValue = document.getElementById("sliderValue");
const valueOutput = document.getElementById("valueOutput");
valueOutput.innerHTML = sliderValue.value;

sliderValue.oninput = function gridSize() {
    let sizeNumber = sliderValue.value;
    gridContainer.style.gridTemplateColumns = `repeat(${sizeNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeNumber}, 1fr)`;
    valueOutput.innerHTML = sliderValue.value;
    box(sizeNumber);
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
        clearBtn.addEventListener("click", function() {
            square.style.backgroundColor = "white";
        })
    }
}


function resetGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

box(16);

  









