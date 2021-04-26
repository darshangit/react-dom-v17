import { useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const togglePara = () => {
    setShowParagraph((showParagraph) => !showParagraph);
  };
  return (
    <div className="App">
      <h1>Hi There</h1>
      <button onClick={togglePara}>Click Me</button>
      <DemoOutput show={false} />
    </div>
  );
}

export default App;
