import React, { useState } from 'react';
import './App.css';
import { TaskPropsType, ToDoList } from './components/ToDoList';
//CRUD

function App() {
    //BLL:
    const toDoTitle: string = "What to learn"

    //state
    // const tasks: Array<TaskPropsType> = 
    const [tasks, setTasks] = useState<Array<TaskPropsType>>([
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "js/es6", isDone: false },
        { id: 3, title: "react", isDone: false },
    ])

    //delete
    const removeTask = (taskId: number) => {
        const nextState: Array<TaskPropsType> = []
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== taskId) {
                nextState.push(tasks[i])
            }

        }
        setTasks(nextState)
    }

    //UI:
    return (
        <div className="App">
            <ToDoList removeTask={removeTask} title={toDoTitle} tasks={tasks} />
        </div>
    );
}

export default App;
