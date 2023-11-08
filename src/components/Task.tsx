import React from "react";

type TaskPropsType = {
   title: string
   isDone: boolean

}

export const Task: React.FC<TaskPropsType> =(props) => {
   debugger
   return (
      <li>
         <input type="checkbox" checked={props.isDone} /> 
         <span>{props.title}</span>
      </li>
   );
};