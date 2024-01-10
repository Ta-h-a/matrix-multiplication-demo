import Range from "../Range/Range";
import Row from "../Row/Row";
import React from "react";

function Matrix({ label, setMatrix }) {
  const [row, setRows] = React.useState(2);
  const [column, setColumns] = React.useState(2);
  const [elements, setElements] = React.useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  function handleElementChange(pos, nextElement) {
    const nextElements = [...elements];
    nextElements[pos.x][pos.y] = Number(nextElement);
    setElements(nextElements);
  }

  let elementsPresent = [...elements].slice(0, row);
  elementsPresent = elementsPresent.map((e) => e.slice(0, column));

  React.useEffect(() => {
    setMatrix(elementsPresent);
  }, [row, column, elements]);

  return (
    <>
      <div>
        <fieldset>
          <legend>{label}</legend>
          <Range label={"Row"} setValue={setRows} value={row} />
          <Range label={"Column"} setValue={setColumns} value={column} />
          {elementsPresent.map((values, index) => (
            <Row
              handleElementChange={handleElementChange}
              position={{ x: index }}
              values={values}
              key={index}
            />
          ))}
        </fieldset>
      </div>
    </>
  );
}

export default Matrix;
