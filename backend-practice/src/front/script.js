const createSudokuGrid = () => {
    fetch("http://localhost:8080/randomsudoku")
        .then(x => x.text())
        .then(text => {
    const sudokuArray = text.split("");
    const sudokuGrid = document.getElementById('sudoku-grid');  
            
    while (sudokuGrid.rows.length >= 1) {
        sudokuGrid.deleteRow(0);
    }
    const rows = 9;
    const cols = 9;

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (var j = 0; j < cols; j++) {
            let tdata = document.createElement('td');
            let cell = document.createElement('input');
            cell.dataset.row = i;
            if (i === 2 || i === 5) {
                cell.style.borderBottomWidth = "4px"; 
            } 
            if (j === 2 || j === 5) {
                cell.style.borderRightWidth = "4px"; 
            } 
            
            cell.dataset.col = j;
            cell.className = "cell";
            cell.id = `${i*9+j}`;
            tdata.appendChild(cell)
            row.appendChild(tdata);
            selectShading(cell);
            if (sudokuArray[i*9+j] != "0") {
                cell.value = sudokuArray[i*9+j];
                cell.contentEditable = "false";
            } else {
                cell.contentEditable = "true";
                cell.style.color = "blue";
            }
        }
        sudokuGrid.appendChild(row);
    }
    const table = document.getElementById("sudoku");
    table.style.borderWidth = "4px";
        });
    
}

const selectShading = (cell) => {
    // cell.addEventListener("keyup", (event) => {
        // event.target.innerHTML = `${event.key}`;});
    cell.addEventListener("keydown", (event) => {
        const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (allowedCharacters.includes(event.key)) {
            event.target.value = "";
        } else {
            event.preventDefault();
            return false;
        }
    })
    cell.addEventListener("input", (element) => {
        let content = element.target.innerText;
        if (content.length > 1) {
        element.innerText = content.slice(0, 1);
        console.log("hello");
    }});
    cell.addEventListener("focus", () => {
        cell.style.backgroundColor = "lightgray";
    }); 
    cell.addEventListener("blur", () => {
        cell.style.backgroundColor = "";
    });
}

const changeValue = ({target}) => {
    target.innerHTML = "hello";
}




const create_button = document.getElementById("request-sudoku");
create_button.addEventListener("click", createSudokuGrid);