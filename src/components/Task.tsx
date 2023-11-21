import React from "react";
import { Button } from "./Button";

type TaskPropsType = {
   title: string
   isDone: boolean
   id: string
   removeTask: (taskId: string) => void

}

export const Task: React.FC<TaskPropsType> = (props) => {
   // debugger
   const onClickRemoveTaskHandler = () => props.removeTask(props.id)
   return (
      <li>
         <input type="checkbox" checked={props.isDone} />
         <span>{props.title}</span>
         <Button nameButton={"x"} onClickHandler={onClickRemoveTaskHandler}></Button>
      </li>
   );
};