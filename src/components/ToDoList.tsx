import React from "react";
import { Button } from "./Button";
import { Task } from "./Task";
import { TasksList } from "./TasksList";


export type ToDoListPropsType = {
   title: string
   tasks: Array<TaskPropsType>
   removeTask: (taskId: number) => void
}

export type TaskPropsType = {
   id: number
   title: string
   isDone: boolean
}
export const ToDoList: React.FC<ToDoListPropsType> = ({ title, tasks, removeTask }) => {
   //1
   // const title = props.title
   // const tasks: Array<TaskPropsType> = props.tasks

   //2
   // const { title: myTitle, tasks: myTasks } = props

   //3
   //const { title, tasks } = props

   //4 Вариант передать в ToDoList



   return (
      <div className="toDo">
         <h3>{title}</h3>
         <div>
            <input />
            <Button nameButton={"+"} onClickHandler={() => { }} />
         </div>
         <TasksList removeTask={removeTask} tasks={tasks}  />

      </div>
   );
};

export default ToDoList