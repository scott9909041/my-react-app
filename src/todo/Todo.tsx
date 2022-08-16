import { Typography } from "@mui/material";
import { useGetTodoList } from "../middleware/todo-list-middleware";
import TodoList from "../todo-list/TodoList";


export const Todo = () => {
  const { data: todos = [], isLoading } = useGetTodoList();
  return (
    <>
      {
        isLoading && (<Typography variant="h4">Loading</Typography>)
      }
      {
        !isLoading && todos.map((todo) => (
          <TodoList key={todo.id} data={todo} />
        ))
      }
    </>
  )
}
