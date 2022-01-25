function createGrid() {
    const rowArray = [];
    for (let row = 0; row < 100; row++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
        for (let col = 0; col < 100; col++) {
            let gridElement = document.createElement('div');
            gridElement.classList.add('gridBox');
            gridElement.setAttribute('draggable', false);
            gridRow.appendChild(gridElement);
        }
        rowArray.push(gridRow);
    }
    rowArray.forEach(rowElement => grid.appendChild(rowElement));
}

function addMouseDown() {
    document.addEventListener('mousedown', function(e) {
        mouseDown = true;
        drag = false;
    });
    document.addEventListener('mouseup', function(e) {
        mouseDown = false;
        drag = false;
    });
}

function removeColor(e) {
    colors.forEach(color => e.target.classList.remove(`clicked-${color}`));
}

function initializeColorSelectors() {
    colorSelectors.forEach(colorSelector => {
        colorSelector.addEventListener('click', function(e) {
            currentColor = e.target.id;
            console.log(currentColor);
            removeSelectorTransform();
            e.target.classList.add('selected');
        });
    });
}

function initializeEraserFunction() {
    eraser.addEventListener('click', function(e) {
        eraser.classList.add('selected');
    });
}

function initializeDrawFunction() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('mouseover', function(e) {
            if (mouseDown == true) {
                removeColor(e);
                gridBox.classList.add(`clicked-${currentColor}`);
            }
        });
        gridBox.addEventListener('click', function(e) {
            console.log(e);
            removeColor(e);
            gridBox.classList.add(`clicked-${currentColor}`);
        });
    });
}

function initializeResetButtonFunction() {
    resetButton.addEventListener('click', function(e) {
        gridBoxes.forEach(gridBox => {
            colors.forEach(color => {
                gridBox.classList.remove(`clicked-${color}`);
            });
        });
    });
}

function removeSelectorTransform() {
    colorSelectors.forEach(colorSelector => {
        colorSelector.classList.remove('selected');
    });
}

let colors = ["blue", "red", "yellow", "green", "black", "magenta", "orange", "lime", "purple", "white", "eraser"];
let mouseDown = false;
let currentColor = "black";
let eraserOn = false;
const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const colorSelectors = document.querySelectorAll('.color-selector');
const eraser = document.querySelector('#eraser.color-selector');
createGrid();
const gridBoxes = document.querySelectorAll('.gridBox');
addMouseDown();
initializeColorSelectors();
initializeDrawFunction();
initializeResetButtonFunction();
initializeEraserFunction();















