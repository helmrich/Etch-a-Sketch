// Get the drawing board
const drawingBoard = document.querySelector("#drawingBoard");

let numberOfFieldsPerRow = document.querySelector("#gridSize").value;
let sizeOfField = drawingBoard.offsetHeight / numberOfFieldsPerRow;

document.querySelector("#gridSize").addEventListener("change", e => {
    numberOfFieldsPerRow = document.querySelector("#gridSize").value;
    sizeOfField = drawingBoard.offsetHeight / numberOfFieldsPerRow;
    resetGrid();
});

document.querySelector("#resetButton").addEventListener("click", resetGrid);

function createGrid() {
    drawingBoard.style["grid-template-columns"] = `repeat(${numberOfFieldsPerRow}, 1fr)`;
    drawingBoard.style["grid-template-rows"] = `repeat(${numberOfFieldsPerRow}, 1fr)`;

    for (let i = 0; i < numberOfFieldsPerRow * numberOfFieldsPerRow; i++) {
        let field = document.createElement("div");
        field.classList.add("field");
        field.style.height = sizeOfField + "px";
        field.style.width = sizeOfField + "px";

        field.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "black";
        });

        drawingBoard.appendChild(field);
    }
}

function resetGrid() {
    while (drawingBoard.lastElementChild) {
        drawingBoard.removeChild(drawingBoard.lastElementChild);
    }
    createGrid();
}

createGrid();