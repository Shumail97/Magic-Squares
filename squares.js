function isMagicSquare(grid) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] + grid[i][1] + grid[i][2] !== 15) {
            return false;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (grid[0][i] + grid[1][i] + grid[2][i] !== 15) {
            return false;
        }
    }

    // Check major diagonals
    if (grid[0][0] + grid[1][1] + grid[2][2] !== 15) {
        return false;
    }
    if (grid[0][2] + grid[1][1] + grid[2][0] !== 15) {
        return false;
    }

    return true;
}

// Example usage:
let grid = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
];
console.log(isMagicSquare(grid));
