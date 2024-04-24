import React, { ReactNode } from "react";

type FromProps = {
  chidlren: ReactNode;
  title?: string;
  onSubmit: () => void;
}

const Form = (props: FromProps): ReactNode => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(props.onSubmit) {
      props.onSubmit();
    }
   }

  return <form onSubmit={ (event: React.FormEvent<HTMLFormElement>) => handleOnSubmit(event) }>
    { props.title ? <h1>{ props.title }</h1> : null}
    { props.chidlren }
  </form>
}

export default Form;