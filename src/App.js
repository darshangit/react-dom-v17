import { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const togglePara = useCallback(() => {
    if (allowToggle) setShowParagraph((showParagraph) => !showParagraph);
  }, [allowToggle]); // use callback saves the the reference of the function across so that react.memo can use the function and wont be rerendered

  const allowToggleHandler = useCallback(() => {
    setAllowToggle((allowToggle) => !allowToggle);
  }, []);

  return (
    <div className="App">
      <h1>Hi There</h1>
      <Button togglePara={allowToggleHandler}>Allow Toggle</Button>
      <br />
      <br />
      <Button togglePara={togglePara}>Click Me</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
