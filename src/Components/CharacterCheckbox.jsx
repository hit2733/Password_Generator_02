import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CharacterCheckbox({ characterInput }) {
  const [characterAllowed, setcharacterAllowed] = useState(false);
  characterInput(() => characterAllowed);

  return (
    <>
      <div>
        <span className="ml-16 text-orange-600 font-bold font-serif">
          Character
        </span>
        <input
          type="checkbox"
          defaultChecked={characterAllowed}
          onChange={() => {
            setcharacterAllowed((prev) => !prev);
          }}
          className="ml-2 d h-3 w-3"
        ></input>
      </div>
    </>
  );
}

export default CharacterCheckbox;
