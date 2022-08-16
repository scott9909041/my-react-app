import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { TodoListResp } from "../middleware/todo-list-middleware";
import { useNavigate } from "react-router-dom";


export interface TodoListProps {
  data: TodoListResp;
}

const TodoList = (props: TodoListProps) => {
  const todoList = props.data;
  const navigate = useNavigate();
  const buttonClickHandler = () => navigate(`detail/${todoList.id}`);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4">{todoList.name}</Typography>
        <Typography>{todoList.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={buttonClickHandler}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default TodoList;
