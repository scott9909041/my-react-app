import { useMutation, useQuery, useQueryClient } from "react-query";
import { callTodoList, callTodoListDetail, postTodoList } from "../rest-client/todo-list";


export interface TodoListReq {
  name: string;
  description: string;
}

export interface TodoListResp {
  id: number;
  name: string;
  description: string;
  numberOfItems: number;
  createdAt: string;
}

export interface TodoListDetailResp {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  items: any[];
}

export const todoListKey = 'todos';
export const useGetTodoList = () => useQuery<TodoListResp[]>(todoListKey, () => callTodoList());

export const todoListDetailKey = 'todo-details';
export const useGetTodoDetail = (id: string) => useQuery<TodoListDetailResp>(todoListDetailKey, () => callTodoListDetail(id))

export const useAddTodoListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<TodoListDetailResp, unknown, TodoListReq>(
    (todoData: TodoListReq) => postTodoList(todoData),
    {
      onSuccess: newTodo => {
        queryClient.setQueriesData<TodoListResp[]>(todoListKey, (state = []) => {
          const newTodoResp: TodoListResp = { ...newTodo, numberOfItems: newTodo.items.length };
          return [ ...state, newTodoResp ];
        })
      }
    }
  )
}
