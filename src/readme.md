Matrix Generator

This small code helps you make lists and number grids (matrices).

What it does:

1. generateIndexArray(len)
   Makes a list of numbers from 0 up to len-1.
   Example: generateIndexArray(4) gives [0, 1, 2, 3]

2. makeSumMatrix(rows, cols)
   Makes a grid where each cell is row number + column number.
   Example with 3 rows and 3 columns:
   [
     [0, 1, 2],
     [1, 2, 3],
     [2, 3, 4]
   ]
   This function returns a Promise, so you use .then() or await.

3. makeProductMatrix(rows, cols)
   Makes a grid where each cell is row number × column number.
   Example with 3 rows and 3 columns:
   [
     [0, 0, 0],
     [0, 1, 2],
     [0, 2, 4]
   ]
   This also returns a Promise.

How to use:

import { generateIndexArray, makeSumMatrix, makeProductMatrix } from './matrixUtils';

const arr = generateIndexArray(5);
console.log(arr); // [0, 1, 2, 3, 4]

makeSumMatrix(3, 3).then(matrix => {
  console.log(matrix);
});

makeProductMatrix(3, 3).then(matrix => {
  console.log(matrix);
});

Notes:
- The matrix functions return results asynchronously (Promises).
- Input numbers are made into whole numbers and not negative automatically.



