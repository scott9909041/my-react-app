import { TextField } from "@mui/material";
import { useState } from "react";
import { TodoListReq, useAddTodoListMutation } from "../middleware/todo-list-middleware";
import { TodoButton } from "../todo-button/TodoButton";
import './TodoForm.css';


export const TodoForm = () => {

  const defaultValue: TodoListReq = {
    name: '',
    description: '',
  };
  const [formValue, setFormValue] = useState(defaultValue);
  const mutation = useAddTodoListMutation();

  const onButtonClickHandler = () => {
    if (formValue.name && formValue.description) {
      const data: TodoListReq = {
        name: formValue.name,
        description: formValue.description,
      };
      mutation.mutate(data);
    }
  };

  const fieldChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    setFormValue(state => ({ ...state, [event.target.name]: event.target.value }));
  }

  return (
    <div className='todo-form-wrapper'>
      <form>
        <TextField name="name" label="Title" variant="standard" value={formValue.name} onChange={fieldChangeHandler} />
        <TextField name="description" label="Content" variant="standard" value={formValue.description} onChange={fieldChangeHandler}/>
        <div className="todo-btn-wrapper">
          <TodoButton onClick={onButtonClickHandler}>Submit</TodoButton>
        </div>
      </form>
    </div>
  )
}

