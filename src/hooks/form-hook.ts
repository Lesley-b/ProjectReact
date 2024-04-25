import { useCallback, useReducer } from "react";
import { IFormElement } from "../shared/models/IFormElement.model"
import { IFormState } from "../shared/models/IFormState.model";

enum FormActionType {
  HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE',
}

interface FormAction {
  type: FormActionType,
  payload: {
    formElement: IFormElement;
    value: string | number;
  }
}

type FormHookAction = (formElement: IFormElement, value: string | number) => void;

const formReducer = (state: IFormState, actions: FormAction): IFormState => {
  const { type, payload } = actions
  switch(type) {
    case FormActionType.HANDLE_INPUT_CHANGE:{
      if(payload) {
        const { formElement } = payload;
        formElement.value = payload.value;
      }
      return {...state};
    }
    default:
      return state
  }
}

const useForm = (initialFormState: IFormState): [IFormState, FormHookAction, FormHookAction] => {
  const [ formState, dispatch ] = useReducer(formReducer, initialFormState);

  const handleDisableInput = useCallback(() => {}, [])
  const handleInputChange = useCallback((formElement: IFormElement, value: string | number) => {
    dispatch({
      type: FormActionType.HANDLE_INPUT_CHANGE,
      payload: {
        formElement,
        value
      }
    })
  }, [])

  return [formState, handleInputChange, handleDisableInput]
}

export default useForm;