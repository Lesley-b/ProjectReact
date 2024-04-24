import React, { ReactNode } from "react";
import { Form, Input } from "../../components/form-elements";
import { Link } from "react-router-dom";

const Login = (): ReactNode => {

  const submit = () => {}

  return (
  <div className="login__container">
    <div className="login__form">
      <Form title="Login" onSubmit={submit}>
        <p>Don't have an account? <Link to='./sign-up'>for free!</Link></p>
        
      </Form>
    </div>
   </div>
  );
}

export default Login;