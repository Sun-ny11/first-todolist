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
    const addTask = (title: string) => {
        const newTask: TaskPropsType = {
            id: v1(),
            title: title,
            isDone: false,
        }
        const nextState: Array<TaskPropsType> = [newTask, ...tasks]

        setTasks(nextState)
    }
    //UI:
    return (
        <div className="App">
            <ToDoList removeTask={removeTask}
                title={toDoTitle}
                tasks={tasks}
                addTask={addTask} />
        </div>
    );
}

export default App;
