function Slots({ val1, val2, val3 }) {
  const checkRes = val1 === val2 && val1 === val3;
  const win = (
    <>
      <h2 style={{ color: "green" }}>You win !</h2>
      <h3>Congrats !</h3>
    </>
  );
  const loose = <h3 style={{ color: "red" }}>You loose ! :(</h3>;
  return (
    <>
      <h1>{val1} {val2} {val3}</h1>
      {checkRes ? win : loose}
    </>
  );
}

export default Slots;
