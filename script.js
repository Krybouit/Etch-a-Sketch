const gridContainer = document.getElementById("grid-container");


function box() {
    for (i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.setAttribute("class","box");
        gridContainer.appendChild(square);
        square.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        })    
    }
}

box();

  









