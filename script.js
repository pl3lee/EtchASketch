function createGrid() {
    const grid = document.querySelector('.grid');
    const rowArray = [];
    for (let row = 0; row < 100; row++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
        for (let col = 0; col < 100; col++) {
            let gridElement = document.createElement('div');
            gridElement.classList.add('gridBox');
            gridElement.setAttribute('draggable', false);
            // gridElement.addEventListener('', colorBoxes);
            gridRow.appendChild(gridElement);
        }
        rowArray.push(gridRow);
    }
    rowArray.forEach(rowElement => grid.appendChild(rowElement));
}

function colorBoxes(e) {
    console.log(e.target);
    e.target.classList.add('clicked');
}
createGrid();
// colorBoxes();

let mouseDown = false;
document.addEventListener('mousedown', function(e) {
    
    mouseDown = true
    console.log(mouseDown)
    drag = false;
})
document.addEventListener('mouseup', function(e) {
    mouseDown = false;
    console.log(mouseDown);
    drag = false;
})

const gridBoxes = document.querySelectorAll('.gridBox');
gridBoxes.forEach(gridBox => {
    gridBox.addEventListener('mouseover', function(e) {
        // console.log(e)
        if (mouseDown == true) {
            gridBox.classList.add('clicked');
        }
    });
    gridBox.addEventListener('click', function(e) {
        gridBox.classList.add('clicked');
    });
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function(e) {
    gridBoxes.forEach(gridBox => {
        gridBox.classList.remove('clicked');
    })
})

