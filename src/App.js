import { useState, useCallback } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const togglePara = useCallback(() => {
    setShowParagraph((showParagraph) => !showParagraph);
  }, []); // use callback saves the the reference of the function across so that react.memo can use the function and wont be rerendered

  return (
    <div className="App">
      <h1>Hi There</h1>
      <button onClick={togglePara}>Click Me</button>
      <DemoOutput show={false} />
    </div>
  );
}

export default App;
