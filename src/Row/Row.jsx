import React from "react";
import Cell from "../Cell/Cell";
import { range } from "../utils";

function Row({ values, position, handleElementChange }) {
  // [0,0]
  return (
    <>
      <div style={{ display: "block" }}>
        {values.map((value, index) => (
          <Cell
            position={{ ...position, y: index }}
            value={value}
            key={index}
            handleElementChange={handleElementChange}
          />
        ))}
      </div>
    </>
  );
}

export default Row;
