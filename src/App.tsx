import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default App;
