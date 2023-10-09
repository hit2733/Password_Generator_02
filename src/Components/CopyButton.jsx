// eslint-disable-next-line react/prop-types
function CopyButton({ Copypasswordtoclip }) {
  return (
    <>
      <button
        onClick={Copypasswordtoclip}
        className="h-9 w-16  bg-blue-700 mt-0.5 text-white font-serif rounded-r-md hover:font-bold"
      >
        COPY
      </button>
    </>
  );
}

export default CopyButton;
