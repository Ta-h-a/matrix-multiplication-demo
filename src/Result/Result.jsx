import React from "react";

function Result({ result }) {
  return (
    <div className="result-main">
      {result &&
        result.map((row, index) => (
          <>
            <p key={index}>
              {row.map((cell, i) => (
                <>
                  <span className="result-cell" key={i}>
                    {cell}
                  </span>{" "}
                </>
              ))}
            </p>
          </>
        ))}
    </div>
  );
}

export default Result;
