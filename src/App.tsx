import "./App.css";
import { TodoForm } from "./todo-form/TodoForm";
import { Typography } from "@mui/material";
import { Todo } from './todo/Todo'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { useGetTodoDetail } from "./middleware/todo-list-middleware";
import { useTranslation } from "react-i18next";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<TodoListPage/>}/>
          <Route path={"/detail/:id"} element={<TodoListDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const TodoListPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2">{t("addTodoListTitle")}</Typography>
      <TodoForm />
      <Typography variant="h2">Show TODO list</Typography>
      <Todo />
    </>
  )
}

const TodoListDetailPage = () => {
  const { t } = useTranslation();
  const params = useParams<{ id: string }>();
  const { data: detail } = useGetTodoDetail(params.id!);
  return (
    <>
      <Typography variant="h2">{t("todoListDetailTitle", { length: detail?.items.length })}</Typography>
      <Typography>ID: {params.id}</Typography>
    </>
  )
}


export default App;
