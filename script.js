const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-button');
const colorBtn = document.querySelector('.colors-button');
const blackBtn = document.querySelector('.black-button');


let divToPaint = document.querySelectorAll('.untagged');

let gridSize = 16;
let colorGrid = false;

container.style.width = '500px';
container.style.height = '500px';
container.style.margin = '5% auto';
container.style.border = '2px solid #6E6E6E';

container.style.display = 'grid';
container.style.justifyContent = 'stretch';
container.style.alignContent = 'stretch';


createGrid(gridSize);

resetBtn.addEventListener('click', userGridSize);
colorBtn.addEventListener('click', (e) => {
    colorGrid = true;
    whichColor();
});
blackBtn.addEventListener('click', (e) => {
    colorGrid = false;
    whichColor();
});

function createGrid(newGridSize) {
    container.innerHTML = '';
    gridSize = newGridSize;
    container.style.gridTemplateRows = `${gridSize}`;
    container.style.gridTemplateColumns = `${gridSize}`;

    for (i = 1; i <= gridSize; i++) {
        for (j = 1; j <= gridSize; j++) {
            let squares = document.createElement('div');
            squares.style.backgroundColor = '#EEEEEE';
            squares.style.gridRow = `${i}`;
            squares.style.gridColumn = `${j}`;
            container.appendChild(squares);
            squares.classList.add('untagged');
        }
        let divToPaint = document.querySelectorAll('.untagged');

        whichColor();
    };
};

function userGridSize() {
    let userGridSize = +prompt('New Grid Size', '16 - 128');
    createGrid(userGridSize);
};

function randomColor() {
    let colorsValues = '012345679ABCDEF';
    let randomcolor = Array.from(colorsValues);
    let newColor = '#';
    for (i = 0; i <= 5; i++) {
        newColor += colorsValues[Math.floor(Math.random() * colorsValues.length)];
    }
    return newColor;
};

function whichColor() {
    let divToPaint = document.querySelectorAll('.untagged');

    divToPaint.forEach((divToPaint) => {
        if (colorGrid == true) {
            divToPaint.addEventListener('mouseenter', (divToPaint) => divToPaint.target.style.backgroundColor = randomColor());
        } else if (colorGrid == false) {
            divToPaint.addEventListener('mouseenter', (divToPaint) => divToPaint.target.style.backgroundColor = darkenBlack());
        };
    });
};

function darkenBlack() {
    let values = 250;
    let color = `rgb(${values}, ${values}, ${values})`;
    values -= 25;
    return color;
};