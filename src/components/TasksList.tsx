import React, { useState } from "react";
import { Task } from "./Task";
import { TaskPropsType } from "./ToDoList";
import { Button } from "./Button";

type TasksListPropsType = {
   tasks: Array<TaskPropsType>
   removeTask: (taskId: string) => void
}

type FilterValuesType = "all" | "active" | "completed"


export const TasksList: React.FC<TasksListPropsType> = ({ tasks, removeTask }) => {
   const [filter, setFilter] = useState<FilterValuesType>("all")

   const tasksFiltered: Array<TaskPropsType> = filter === "active"
      ? tasks.filter(t => t.isDone === false)
      : filter === "completed"
         ? tasks.filter(t => t.isDone === true)
         : tasks

   const listItems: JSX.Element = tasksFiltered.length === 0
      ? <span>Your list is empty. Create task</span>
      : <ul>
         {
            tasksFiltered.map((t: TaskPropsType) => {
               return (
                  <Task key={t.id}
                     removeTask={removeTask}
                     id={t.id}
                     title={t.title}
                     isDone={t.isDone} />
               )
            })
         }
      </ul>

   return (
      <div className="tasksList">
         {listItems}

         <div>
            <Button nameButton={"All"} onClickHandler={() => setFilter("all")} />
            <Button nameButton={"Active"} onClickHandler={() => setFilter("active")} />
            <Button nameButton={"Completed"} onClickHandler={() => setFilter("completed")} />
         </div>
      </div>
   );
};