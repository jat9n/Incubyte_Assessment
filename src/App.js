import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const add = (str) => {};

  const handleChange = (e) => setInput(e.target.value);

  const handleCalculate = () => {};

  return (
    <div className="App">
      <div className="centered-container">
        <textarea
          rows={4}
          cols={70}
          spellCheck={false}
          onChange={handleChange}
        />
        <button onClick={handleCalculate}> CALCULATE </button>
      </div>
      {result && <div>{result}</div>}
    </div>
  );
}

export default App;
