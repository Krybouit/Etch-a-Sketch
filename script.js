const gridContainer = document.getElementById("grid-container");
const clearBtn = document.getElementById("clearBtn");
const sliderValue = document.getElementById("sliderValue");
const valueOutput = document.getElementById("valueOutput");
const colorPicker = document.getElementById("colorPicker");
const eraser = document.getElementById("eraser");
const pen = document.getElementById("pen");
const press = document.querySelectorAll(".press");
let color = "#000000";
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
    valueOutput.innerText = sliderValue.value + "x" + sliderValue.value;
    box(sizeNumber);
}


function draw() {
    gridContainer.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = color;
    });
}

function selectColor(event) {
   color = event.target.value;
   document.getElementById("eraser").classList.remove("focus");
   document.getElementById("pen").classList.add("focus");
}

function erase() {
    gridContainer.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "white";
    });
}

function resetGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

clearBtn.addEventListener("click", function() {
    const clear = document.querySelectorAll(".box");
    clear.forEach(element => {
        element.style.backgroundColor = "white";
    })
})

press.forEach(element => {
    element.addEventListener("click", function buttonFocus() {
        document.querySelector(".focus").classList.remove("focus");
        element.classList.add("focus");
    })
})

pen.addEventListener("click", draw);

colorPicker.addEventListener("change", (event) => selectColor(event));

colorPicker.addEventListener("click", draw);

eraser.addEventListener("click", erase);

draw();
box(16);

  









