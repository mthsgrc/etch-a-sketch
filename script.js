const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-button');
let gridSize = 16;
// container.style.backgroundColor = '#B0B0B0';
container.style.width = '750px';
container.style.height = '750px';
container.style.margin = '5% auto';
container.style.border = '2px solid #6E6E6E';

// container.style.display = 'grid';
// container.style.justifyContent = 'stretch';
// container.style.alignContent = 'stretch';

// container.style.gridTemplateRows = `${gridSize}`;
// container.style.gridTemplateColumns = `${gridSize}`;

createGrid(gridSize);

function createGrid(newGridSize){
	gridSize = newGridSize;

	container.style.display = 'grid';
	container.style.justifyContent = 'stretch';
	container.style.alignContent = 'stretch';
	container.style.gridTemplateRows = `${gridSize}`;
	container.style.gridTemplateColumns = `${gridSize}`;
	
	for (i = 1; i <= gridSize; i++){
		for (j = 1; j <= gridSize; j++){
		let squares = document.createElement('div');
		squares.style.backgroundColor = '#EEEEEE';
		squares.style.gridRow = `${i}`;
		squares.style.gridColumn = `${j}`;
		container.appendChild(squares);
		squares.classList.add('untagged');
		}
	}
};

resetBtn.addEventListener('click', clearGrid);

function clearGrid(){
	divToPaint.forEach((divToPaint) => {
	divToPaint.style.backgroundColor = '#EEE';
	});
	userGridSize();
};

function userGridSize(){
	let userGridSize = +prompt('New Grid Size', '10 - 128');
	createGrid(userGridSize);
};

const divToPaint = document.querySelectorAll('.untagged');
divToPaint.forEach((divToPaint) => {
	divToPaint.addEventListener('click', (divToPaint) => divToPaint.target.style.backgroundColor = 'black');
	// divToPaint.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
});
	

