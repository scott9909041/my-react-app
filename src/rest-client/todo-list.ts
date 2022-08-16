import axios from "axios";
import { TodoListReq } from "../middleware/todo-list-middleware";


const url = '/api/todoList';

export const callTodoList = () => axios.get(url).then(resp => Promise.resolve(resp.data));
export const callTodoListDetail = (id: string) => axios.get(`${url}/${id}`).then(resp => Promise.resolve(resp.data));
export const postTodoList = (data: TodoListReq) => axios.post(url, data).then(resp => Promise.resolve(resp.data));
