import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const add = (numbers) => {
    if (numbers === "") {
      return 0;
    }

    const arr = numbers.split(",");
    return arr.reduce((acc, crr) => acc + parseInt(crr), 0);
  };

  const handleChange = (e) => setInput(e.target.value);

  const handleCalculate = (str) => {
    const sum = add(str);
    setResult(sum);
  };

  return (
    <div className="App">
      <div className="centered-container">
        <textarea
          rows={4}
          cols={70}
          spellCheck={false}
          onChange={handleChange}
        />
        <button onClick={() => handleCalculate(input)}> CALCULATE </button>
      </div>
      {result && <div>{result}</div>}
    </div>
  );
}

export default App;
