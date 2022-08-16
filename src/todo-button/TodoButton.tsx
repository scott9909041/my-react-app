import { Button } from "@mui/material";
import { ReactNode } from "react"

export interface TodoButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const TodoButton = (props: TodoButtonProps) => (
  <Button variant={'contained'} onClick={props.onClick}>{props.children}</Button>
)
