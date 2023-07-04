import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Message } from "./Message";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <Message count={count} />
      <button type="submit" onClick={getAdvice}>
        Get advice
      </button>
      <h1>Welcome to React!!</h1>
    </div>
  );
}

export default App;
