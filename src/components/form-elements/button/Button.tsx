import React, { ReactNode } from "react";

type ButtonPorps = {
  onClick: () => {};
  children: ReactNode;
};

const Button = (porps: ButtonPorps): ReactNode => {
  const handleClick = () => {
    porps.onClick();
  }

  return <button onClick={handleClick}>{porps.children}</button>
};

export default Button;