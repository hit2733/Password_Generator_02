import CharacterCheckbox from "../Components/CharacterCheckbox";
import CopyButton from "../Components/CopyButton";
import LengthRange from "../Components/LengthRange";
import NumberCheckbox from "../Components/NumberCheckbox";
import PasswordInputBox from "../Components/PasswordInputBox";
import { useState, useCallback, useEffect } from "react";
import Paste from "../Components/Paste";

function Box() {
  const [numbers, setnumbers] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, Setpassword] = useState("");
  const [Length, setLength] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZQabcdefghijlmopqrstwuvxyz";
    if (numbers) str += "0123456789";
    if (character) str += "!@#$%&*?";
    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    Setpassword(pass);
  }, [Length, numbers, character, Setpassword]);

  const Copypasswordtoclip = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [Length, numbers, character, PasswordGenerator]);

  return (
    <div className="bg-slate-300 w-1/3 h-72 mx-80 my-24 rounded-xl border-y-orange-500 border-8 ">
      <PasswordInputBox password={password} />
      <CopyButton Copypasswordtoclip={Copypasswordtoclip} />
      <LengthRange LengthHandler={(Length) => setLength(Length)} />
      <NumberCheckbox
        NumbersInput={(numberAllowed) => setnumbers(numberAllowed)}
      />
      <CharacterCheckbox
        characterInput={(characterAllowed) => setcharacter(characterAllowed)}
      />
      <Paste />
    </div>
  );
}

export default Box;
