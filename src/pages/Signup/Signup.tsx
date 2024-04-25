import React, { ReactNode, useEffect, useState } from "react";
import useForm from "../../hooks/form-hook";
import { Dropdown, Form, Input } from "../../components/form-elements";
import { IRole } from "../../shared/models/IRole.model";
import RoleService from "../../services/RoleService";

const Signup = (): ReactNode => {

  const [signFormState, handleInputChange] = useForm({
    formElements: {
      email: {
        name: 'email',
        value: ""
      },
      password: {
        name: 'password', 
        value: ""
      },
      names:  {
        name: 'names', 
        value: ""
      },
      lastName1:  {
        name: 'lastName1', 
        value: ""
      },
      lastName2:  {
        name: 'lastName2', 
        value: ""
      },
      role: {
        name: "role",
        value: 0
      }
    }
  });

  const [roles, setRoles] = useState<Array<IRole>>([]);
  const roleService = new RoleService();

  useEffect(() => {
    getAllowedRoles()
  }, ([]))

  const getAllowedRoles = () => {
    //showLoader();
    roleService.getAllowed()
      .then((res) => {
        setRoles(res.data)
      })
      .catch((error) => {
        console.log(error);
      //   showErrorAlert(error.response.data.message);
      })
      .finally()
      //hideLoader();
  }

  const submit = () => {}

  return <div>
    <Form title="Signup" onSubmit={submit}>
      <Input
          label="Email"
          formElement={signFormState.formElements['email']}
          value={signFormState.formElements['email'].value}
          onChange={handleInputChange}
          type="email"
        />

      <Input
          label="Password"
          formElement={signFormState.formElements['password']}
          value={signFormState.formElements['password'].value}
          onChange={handleInputChange}
          type="password"
        />

      <Input
          label="Name"
          formElement={signFormState.formElements['names']}
          value={signFormState.formElements['names'].value}
          onChange={handleInputChange}
        />

      <Input
          label="Lastname"
          formElement={signFormState.formElements['lastName1']}
          value={signFormState.formElements['lastName1'].value}
          onChange={handleInputChange}
        />

      <Input
          label="Maternal Family Name"
          formElement={signFormState.formElements['lastName2']}
          value={signFormState.formElements['lastName2'].value}
          onChange={handleInputChange}
        />

      <Dropdown 
        data={roles.map((role) => {
          return {
            id: role.id,
            text: role.name
          }
        })}
        label="Role"
        value={signFormState.formElements['role'].value}
        formElement={signFormState.formElements['role']}
        onChange={handleInputChange}
      />
    </Form>
  </div>
}

export default Signup;