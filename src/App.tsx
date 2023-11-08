import React from 'react';
import './App.css';
import { TaskPropsType, ToDoList } from './components/ToDoList';

function App() {
    const toDoTitle_1: string = "What to learn"
    const toDoTitle_2: string = "What to buy"

    const task_1: Array<TaskPropsType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "js/es6", isDone: false},
        {id: 3, title: "react", isDone: false},
    ]
    const task_2: Array<TaskPropsType> = [
        {id: 4, title: "beer", isDone: true},
        {id: 5, title: "bred", isDone: true},
        {id: 6, title: "cheeps", isDone: false},
    ]

    return (
        <div className="App">
            <ToDoList title={toDoTitle_1} tasks={task_1}/>
            <ToDoList title={toDoTitle_2} tasks={task_2}/>
        </div>
    );
}

export default App;
