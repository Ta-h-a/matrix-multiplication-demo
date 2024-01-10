export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const matrixMultiplication = (firstMatrix, secondMatrix) => {
  if (
    firstMatrix.length === 0 ||
    secondMatrix.length === 0 ||
    firstMatrix[0].length != secondMatrix.length
  ) {
    return undefined;
  }

  let result = [];
  for (let i = 0; i < firstMatrix.length; i++) {
    let r = [];
    let sum = 0;
    let limit = 0;
    while (limit < secondMatrix[0].length) {
      for (let j = 0; j < secondMatrix.length; j++) {
        sum += firstMatrix[i][j] * secondMatrix[j][limit];
      }
      r.push(sum);
      limit++;
      sum = 0;
    }
    result.push(r);
  }
  return result;
};
