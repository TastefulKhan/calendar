import { useState } from "react";
import AlignWeek from "./views/AlignWeek";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      TESTTEXT
      <AlignWeek />
    </div>
  );
}

export default App;
