// eslint-disable-next-line react/prop-types
function PasswordInputBox({ password }) {
  return (
    <>
      <div className="mx-36 text-black mt-4 text-xl decoration-inherit font-serif">
        Password Generator
      </div>
      <input
        type="text"
        value={password}
        readOnly
        className="h-9 w-72
      ml-16 mt-4 rounded-l-md text-red-600 font-bold "
      ></input>
    </>
  );
}

export default PasswordInputBox;
