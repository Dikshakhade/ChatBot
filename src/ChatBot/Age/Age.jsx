import React from "react";

function Age(props) {
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  let range = arrayRange(18, 40, 1);

  return (
    <div>
      <select onChange={props.actionProvider.displayAge}>
        {range.map((age, i) => {
          return <option key={i}>{age}</option>;
        })}
      </select>
    </div>
  );
}

export default Age;
