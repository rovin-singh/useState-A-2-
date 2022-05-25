import "./App.css"
import Timer from "./components/Timer";
import { useState } from "react";
function App() {
  const [start, setStart] = useState(10);
  const end = 15;
  return (
    <div className="App">
      <Timer start={start} end={end} setStart={setStart} />
    </div>
  );
}
export default App;
