import React, { ChangeEvent, ReactNode } from "react";
import { IFormElement } from "../../../shared/models/IFormElement.model";

type DropdownData = Array<{
  id: number | string;
  text: string;
}>

type DropdownProps = {
  label: string;
  value?: string | number;
  formElement: IFormElement;
  onChange: (formElement: IFormElement, value: string) => void;
  data: DropdownData;
}

const Dropdown = (props: DropdownProps): ReactNode => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(props.formElement, event.target.value);
  }

  return <div className="dropdown__container">
    <label>{ props.label }</label>
    <select value={ props.value } onChange={ handleOnChange }>
      <option value={0}>Select an option</option>
      { props.data.map((item, index) => {
        return <option key={index} value={item.id}>{item.text}</option>
      })}
    </select>
  </div>

}

export default Dropdown;