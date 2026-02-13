const container = document.querySelector("#container");
const btn = document.querySelector("#changeGridBtn");

function makeGrid(noOfSquares) {
    container.innerHTML = "";

    const totalSquares = noOfSquares * noOfSquares;
    const sizeOfSquare = 960 / noOfSquares;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");

        square.style.height = `${sizeOfSquare}px`;
        square.style.width = `${sizeOfSquare}px`;
        square.style.backgroundColor = "lightgray"; 

        
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "lightgray";
        });

        container.appendChild(square);
    }
}


btn.addEventListener("click", () => {
    let noOfSquares = parseInt(prompt("Enter the no of square:"),10);
    if (noOfSquares > 100) {
        alert("grid no too high")
    } 
    else {
        makeGrid(noOfSquares);
    }
});