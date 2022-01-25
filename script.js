const grid = document.querySelector('.grid');
const rowArray = []
for (let row = 0; row < 16; row++) {
    let gridRow = document.createElement('div');
    gridRow.style.cssText = 'flex: 1; width: 100vh; display: flex;';
    gridRow.classList.add('row');
    for (let col = 0; col < 16; col++) {
        let gridElement = document.createElement('div');
        gridElement.style.cssText = 'flex: 1; border: solid #808080; border-width: 1px';
        // gridElement.textContent = 'hello'
        gridRow.appendChild(gridElement);
    }
    rowArray.push(gridRow);
}
rowArray.forEach(rowElement => grid.appendChild(rowElement));