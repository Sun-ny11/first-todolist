import React, { useState } from "react";
import { Button } from "./Button";
import { TasksList } from "./TasksList";
import './../App.css'


export type ToDoListPropsType = {
   title: string
   tasks: Array<TaskPropsType>
   removeTask: (taskId: string) => void
   addTask: (title: string) => void
   changeTaskStatus: (taskID: string, isDone: boolean) => void
}

export type TaskPropsType = {
   id: string
   title: string
   isDone: boolean
}
export const ToDoList: React.FC<ToDoListPropsType> = ({ title, tasks, removeTask, addTask, changeTaskStatus }) => {
   const [newTaskTitle, setTitle] = useState('')
   const [inputError, setInputError] = useState(false)
   const [collapsed, setCollapsed] = useState(false)


   const onClickAddTask = () => {
      const trimmedTitle = newTaskTitle.trim()
      if (trimmedTitle) {
         addTask(trimmedTitle)
         setCollapsed(false)
         setTitle("")
      }else{
         setInputError(true)
      }

   }

   const onKeyDownAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.key === "Enter"
         && Boolean(newTaskTitle)
         && newTaskTitle.length < 15
         && onClickAddTask()
   }

   const maxTitleLengthError = newTaskTitle.length >= 15
   const onChengSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputError(false)
      if (e.currentTarget.value.length <= 15) {
         setTitle(e.currentTarget.value)
      }
   }

   const tasksList = <TasksList removeTask={removeTask} tasks={tasks} changeTaskStatus={changeTaskStatus} />

   return (
      <div className="toDo">
         <h3>{title}</h3>

         <div>
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "show" : "hide"}</button>

         </div>
         <div>
            <input value={newTaskTitle} onChange={onChengSetTitle} onKeyDown={onKeyDownAddTask} className={inputError?"error":""} />

            <Button
               nameButton={"+"}
               onClickHandler={onClickAddTask}
               disabled={!newTaskTitle || maxTitleLengthError} />
            {maxTitleLengthError && <div>Your task title is to long</div>}
            {inputError&& <div style={{color:"red"}}>Please, enter correct type</div>}
         </div>
         {collapsed? null:tasksList}
      </div>
   );
};

export default ToDoList