import { memo } from "react";

const Button = (props) => {
  console.log("Button Running: ", props.children );
  return <button onClick={props.togglePara}>{props.children}</button>;
};

export default memo(Button);
