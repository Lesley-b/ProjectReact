import React, { ReactNode } from "react";
import { Form, Input } from "../../components/form-elements";
import { Link } from "react-router-dom";
import useForm from "../../hooks/form-hook";

const Login = (): ReactNode => {

  const [ formState, handleInputChange ] = useForm({
    formElements: {
      email: {
        name: 'email',
        value: ""
      },
      password: {
        name: 'password',
        value: ""
      }
    }
  })

  const submit = () => {}

  return (
  <div className="login__container">
    <div className="login__form">
      <Form title="Login" onSubmit={submit}>
        <p>Don't have an account? <Link to='./sign-up'>for free!</Link></p>
        <Input 
        label="Email"
        formElement={formState.formElements['email']}
        value={formState.formElements['email'].value}
        onChange={handleInputChange}
        type="email"
        />
        <Input 
        label="Password"
        formElement={formState.formElements['password']}
        value={formState.formElements['password'].value}
        onChange={handleInputChange}
        type="password"
        />
      </Form>
    </div>
   </div>
  );
}

export default Login;