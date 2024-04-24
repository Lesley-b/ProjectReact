import React, { ChangeEvent, ReactNode } from "react";
import { IFormElement } from "../../../shared/models/IFormElement.model";

type InputProps = {
  label: string;
  formElement: IFormElement;
  value: string | number;
  onChange: (formElement: IFormElement, value: string) => void;
  type?: string;
  disabled?: boolean;
}

const Input = (porps: InputProps): ReactNode => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    porps.onChange(porps.formElement, e.target.value);
  };

  return (
    <>
    <label>{ porps.label }</label>
    <input 
      value={porps.value}
      onChange={(e) => handleOnChange(e)}
      type={porps.type || "text"}
      disabled={porps.disabled || false}
    />

    </>
  );
}

export default Input;
