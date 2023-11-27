import React, { useState } from 'react';
import './App.css';
import { TaskPropsType, ToDoList } from './components/ToDoList';
import { v1 } from 'uuid';
//CRUD
//create
//read
//update
//delete 

function App() {
    //BLL:
    const toDoTitle: string = "What to learn"

    //state
    const [tasks, setTasks] = useState<Array<TaskPropsType>>([
        { id: v1(), title: "HTML", isDone: true },
        { id: v1(), title: "js/es6", isDone: false },
        { id: v1(), title: "react", isDone: false },
    ])

    //delete
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    //create
    const addTask = (title: string) => {
        const newTask: TaskPropsType = {
            id: v1(),
            title: title,
            isDone: false,
        }
        const nextState: Array<TaskPropsType> = [newTask, ...tasks]

        setTasks(nextState)
    }

    //update task (isDone)
    const changeTaskStatus = (taskID:string, isDone:boolean) => {
        setTasks(tasks.map(t => t.id === taskID?{...t, isDone: isDone}:t)) //setTasks(tasks.map(t => t.id === taskID?{...t, isDone}:t))
    }
    //update task (Title)


    //UI:
    return (
        <div className="App">
            <ToDoList removeTask={removeTask}
                title={toDoTitle}
                tasks={tasks}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus} />
                
        </div>
    );
}

export default App;
