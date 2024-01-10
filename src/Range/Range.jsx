import React from "react";

function Range({ label, setValue, value }) {
  const id = React.useId();

  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type="range"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          min={1}
          max={5}
        />
      </div>
    </>
  );
}

export default Range;
