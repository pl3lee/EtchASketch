function createGrid() {
    const grid = document.querySelector('.grid');
    const rowArray = []
    for (let row = 0; row < 16; row++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
        for (let col = 0; col < 16; col++) {
            let gridElement = document.createElement('div');
            gridElement.classList.add('gridBox')
            gridRow.appendChild(gridElement);
        }
        rowArray.push(gridRow);
    }
    rowArray.forEach(rowElement => grid.appendChild(rowElement));
}

createGrid();