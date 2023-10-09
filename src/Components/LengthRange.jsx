import { useState } from "react";

// eslint-disable-next-line react/prop-types
function LengthRange({ LengthHandler }) {
  const [Length, setLength] = useState(8);
  LengthHandler(() => Length);
  return (
    <>
      <input
        type="range"
        className="w-18 ml-16 mt-2"
        min={8}
        max={18}
        value={Length}
        onChange={(e) => setLength(e.target.value)}
      ></input>
      <p className="ml-16 -mt-3 text-orange-600 font-bold font-serif mr-60">
        Length({Length})
      </p>
    </>
  );
}

export default LengthRange;
