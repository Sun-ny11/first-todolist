import React, { useRef } from "react";
import { Button } from "./Button";
import { TasksList } from "./TasksList";


export type ToDoListPropsType = {
   title: string
   tasks: Array<TaskPropsType>
   removeTask: (taskId: string) => void
   addTask: (title: string) => void
}

export type TaskPropsType = {
   id: string
   title: string
   isDone: boolean
}
export const ToDoList: React.FC<ToDoListPropsType> = ({ title, tasks, removeTask, addTask }) => {
   const taskTitleInput = useRef<HTMLInputElement>(null)
   const onClickAddTask = () => {
      if (taskTitleInput.current) {
         const newTaskTitle = taskTitleInput.current.value
         addTask(newTaskTitle)
         taskTitleInput.current.value = ""
      }

   }
   return (
      <div className="toDo">
         <h3>{title}</h3>
         <div>
            <input ref={taskTitleInput} />
            <Button nameButton={"+"} onClickHandler={onClickAddTask} />
         </div>
         <TasksList removeTask={removeTask} tasks={tasks} />
      </div>
   );
};

export default ToDoList