import React, { useState } from "react";
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
   const [newTaskTitle, setTitle] = useState('')

   const onClickAddTask = () => {
      addTask(newTaskTitle)
      setTitle("")
   }

   const onKeyDownAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
         e.key === "Enter"
         && Boolean(newTaskTitle)
         && newTaskTitle.length < 15
         && onClickAddTask()
   }

   const maxTitleLengthError = newTaskTitle.length >= 15
   const onChengSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.value.length <= 15) {
         setTitle(e.currentTarget.value)
      }
   }
   return (
      <div className="toDo">
         <h3>{title}</h3>
         <div>
            <input value={newTaskTitle} onChange={onChengSetTitle} onKeyDown={onKeyDownAddTask} />
            <Button
               nameButton={"+"}
               onClickHandler={onClickAddTask}
               disabled={!newTaskTitle || maxTitleLengthError} />
            {maxTitleLengthError && <div>Your task title is to long</div>}
         </div>
         <TasksList removeTask={removeTask} tasks={tasks} />
      </div>
   );
};

export default ToDoList