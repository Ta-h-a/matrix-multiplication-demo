import "./App.css";

import React from "react";
import { matrixMultiplication, range } from "./utils";
import Matrix from "./Matrix/Matrix";
import Result from "./Result/Result";

function App() {
  const [firstMatrix, setFirstMatrix] = React.useState([[0, 0]]);
  const [secondMatrix, setSecondMatrix] = React.useState([[0, 0]]);

  React.useEffect(() => {
    console.log(firstMatrix);
    console.log(secondMatrix);
    console.log({ result: matrixMultiplication(firstMatrix, secondMatrix) });
  }, [firstMatrix, secondMatrix]);

  const result = matrixMultiplication(firstMatrix, secondMatrix);

  return (
    <>
      <Matrix setMatrix={setFirstMatrix} label={"Matrix 1"} />
      <Matrix setMatrix={setSecondMatrix} label={"Matrix 2"} />
      <h2>Result:</h2>
      {result ? <Result result={result} /> : "Does not exist"}
    </>
  );
}

export default App;
