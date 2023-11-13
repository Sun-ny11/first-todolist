import React from "react";
import { Button } from "./Button";

type TaskPropsType = {
   title: string
   isDone: boolean
   id: number
   removeTask: (taskId: number) => void

}

export const Task: React.FC<TaskPropsType> = (props) => {
   // debugger
   const onClikRemoveTaskHandler = () => props.removeTask(props.id)
   return (
      <li>
         <input type="checkbox" checked={props.isDone} />
         <span>{props.title}</span>
         <Button nameButton={"x"} onClickHandler={onClikRemoveTaskHandler}></Button>
      </li>
   );
};