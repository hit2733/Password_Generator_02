import { useState } from "react";

// eslint-disable-next-line react/prop-types
function NumberCheckbox({ NumbersInput }) {
  const [numberAllowed, setnumberAllowed] = useState(false);

  NumbersInput(() => numberAllowed);

  return (
    <>
      <span className="ml-16 text-orange-600 font-bold font-serif">
        Numbers
      </span>
      <input
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => {
          setnumberAllowed((prev) => !prev);
        }}
        className="ml-2 d h-3 w-3"
      ></input>
    </>
  );
}

export default NumberCheckbox;
