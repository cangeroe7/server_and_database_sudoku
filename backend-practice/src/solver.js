const validStr = (str) => /^\d+$/.test(str) && str.length == 45;

const strToGrid = (str) => {
    let grid = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
    for (let i = 0; i < str.length; i++) {
        const row = Math.floor(i / 9);
        const col = i % 9;
        grid[row][col] = parseInt(str[i]);
    }
    return grid;
}

function solveSudoku(board) {
    const solutions = [];
    solve(board, solutions);
    return solutions;
  }
  
  function solve(board, solutions) {
    if (!findEmpty(board)) {
      solutions.push(board.map(row => [...row])); // Store the solution found
      return;
    }
  
    const [row, col] = findEmpty(board);
  
    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
  
        solve(board, solutions);
  
        board[row][col] = 0; // Reset the cell if the solution is not valid
      }
    }
  }
  
  function findEmpty(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null;
  }
  
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }
  
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Example Sudoku board (0 represents empty cells)
  const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  

const sudoku_check = (sudoku_str) => {
    if (!validStr(sudoku_str)) {
        return console.error("Invalid String");
    }
    const grid = strToGrid(sudoku_str);
    const allSolutions = solveSudoku(sudokuBoard);
    switch (allSolutions.length) {
        case 0:
            return "No solution";
            break;
        case 1:
            return allSolutions[0];
            break;
        default:
            return "Multiple solutions"
            break;
    }
}


 
  