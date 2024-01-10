import React from "react";

function Cell({ value, handleElementChange, position }) {
  const id = React.useId();
  return (
    <>
      <input
        type="number"
        value={value}
        id={id}
        onChange={(event) => {
          const nextValue = event.target.value;
          handleElementChange(position, nextValue);
        }}
        className="cell"
      />
    </>
  );
}

export default Cell;
