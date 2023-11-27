import React, { ChangeEvent } from "react";
import { Button } from "./Button";
import './../App.css'

type TaskPropsType = {
   title: string
   isDone: boolean
   id: string
   removeTask: (taskId: string) => void
   changeTaskStatus:(taskID:string, isDone:boolean)=>void

}

export const Task: React.FC<TaskPropsType> = (props) => {
   // debugger
   const onClickRemoveTaskHandler = () => props.removeTask(props.id)
   const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(props.id, e.currentTarget.checked)

   return (
      <li className={props.isDone?"is-done":""}>
         <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
         <span>{props.title}</span>
         <Button nameButton={"x"} onClickHandler={onClickRemoveTaskHandler}></Button>
      </li>
   );
};