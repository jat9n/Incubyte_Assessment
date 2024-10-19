import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const add = (numbers) => {
    if (numbers === "") {
      return 0;
    }
    let breakPoints = [",", "\n"];

    if (numbers.startsWith("//")) {
      let breakPointEndIndex = numbers.indexOf("\n");
      let customBreakPoint = numbers.substring(2, breakPointEndIndex);
      breakPoints.push(customBreakPoint);
      numbers = numbers.substring(breakPointEndIndex + 1);
    }

    let breakPointsRegex = new RegExp(`[${breakPoints.join("")}]`);
    const arr = numbers.split(breakPointsRegex);

    const negativeIntegers = arr.filter((i) => i < 0);

    return negativeIntegers.length === 0
      ? arr.reduce((acc, crr) => acc + parseInt(crr), 0)
      : negativeIntegers;
  };

  const handleChange = (e) => setInput(e.target.value);

  const handleCalculate = (str) => {
    const sum = add(str);
    typeof sum === "number"
      ? setResult(sum)
      : setResult(`Error: negative numbers not allowed ${sum.join(", ")}`);
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
