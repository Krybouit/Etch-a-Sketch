const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clearBtn");
const sliderValue = document.getElementById("sliderValue");
const valueOutput = document.getElementById("valueOutput");
valueOutput.innerHTML = "16x16";



function box(size) {
    resetGrid(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        gridContainer.appendChild(square);
        square.setAttribute("class","box");
    }
}

sliderValue.oninput = function gridSize() {
    let sizeNumber = sliderValue.value;
    gridContainer.style.gridTemplateColumns = `repeat(${sizeNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${sizeNumber}, 1fr)`;
    valueOutput.innerHTML = sliderValue.value + "x" + sliderValue.value;
    box(sizeNumber);
}


gridContainer.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "black";
});


clearBtn.addEventListener("click", function() {
    let erase = document.querySelectorAll(".box");
    erase.forEach(element => {
        element.style.backgroundColor = "white";
    })
});


function resetGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

box(16);

  









