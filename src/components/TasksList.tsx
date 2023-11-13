import React, { useState } from "react";
import { Task } from "./Task";
import { TaskPropsType } from "./ToDoList";
import { Button } from "./Button";

type TasksListPropsType = {
   tasks: Array<TaskPropsType>
   removeTask: (taskId: number) => void
}


type FilterValuesType = "all" | "active" | "complited"

export const TasksList: React.FC<TasksListPropsType> = ({ tasks, removeTask }) => {
   const [filter, setFilter] = useState<FilterValuesType>("all")

   const tasksFiltered: Array<TaskPropsType> = filter === "active"
      ? tasks.filter(t => t.isDone === false)
      : filter === "complited"
         ? tasks.filter(t => t.isDone === true)
         : tasks

   // const listItems: Array<JSX.Element> = []
   // for (let i = 0; i < tasksFiltered.length; i++) {

   //    listItems.push(<Task key={tasksFiltered[i].id}
   //       removeTask={removeTask}
   //       id={tasksFiltered[i].id}
   //       title={tasksFiltered[i].title}
   //       isDone={tasksFiltered[i].isDone} />)

   //listItems.push<Task {...tasks[i]}>)
   // };

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
            <Button nameButton={"Completed"} onClickHandler={() => setFilter("complited")} />
         </div>
      </div>
   );
};