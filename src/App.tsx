import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const header1 = 1
    const header2 = 2
    const header3 = 3

    const tasks1 = [
        {id:1, title: 'JS', isDone: true},
        {id:1, title: 'React', isDone: true},
        {id:1, title: 'HTML&CSS', isDone: false},
    ]

    const tasks2 = [
        {id:2, title: 'Cleaning', isDone: true},
        {id:2, title: 'Homework', isDone: true},
        {id:2, title: 'Eating', isDone: true},
    ]



    return (
        <div className="App">
            <Todolist header={'What to learn'} number={header1} tasks={tasks1}/>
            <Todolist header={'What to do'} number={header2} tasks={tasks2}/>
            <Todolist number={header3}/>
        </div>
    );
}

export default App;
