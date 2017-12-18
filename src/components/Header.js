import React from "react";

const style = {margin:"10px"};

const Header = (props) => {
  return <div style={style}>Welcome: {props.userName}</div>
};
export default Header