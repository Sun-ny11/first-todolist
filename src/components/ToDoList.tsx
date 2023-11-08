import React from "react";
import { Button } from "./Button";
import { Task } from "./Task";


type ToDoListPropsType = {
   title: string
   tasks: Array<TaskPropsType>

}

export type TaskPropsType = {
   id: number
   title: string
   isDone: boolean
}
export const ToDoList: React.FC<ToDoListPropsType> = ({ title, tasks }) => {
   //1
   // const title = props.title
   // const tasks: Array<TaskPropsType> = props.tasks

   //2
   // const { title: myTitle, tasks: myTasks } = props

   //3
   //const { title, tasks } = props

   //4 Вариант передать в ToDoList
   
   const listItems: Array<JSX.Element> = []
   for (let i = 0; i < tasks.length; i++) {
      
      listItems.push(<Task title={tasks[i].title} isDone={tasks[i].isDone}/>)
      //listItems.push<Task {...tasks[i]}>)
   };

   return (
      <div className="toDo">
         <h3>{title}</h3>
         <div>
            <input />
            <Button nameButton={"+"} />
         </div>
         <ul>
            {listItems}
         </ul>
         <div>
            <Button nameButton={"All"} />
            <Button nameButton={"Active"} />
            <Button nameButton={"Completed"} />
         </div>
      </div>
   );
};