import React, { useState } from "react";

function App() {
  const [num, setnum] = useState(0);

  function btnclick() {
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
  }

  return (
    <div>
      <h3>{num}</h3>

      <button onClick={btnclick}>Click</button>
    </div>
  );
}

export default App;
