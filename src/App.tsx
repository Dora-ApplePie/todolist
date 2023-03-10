import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'React', isDone: true},
        {id: 3, title: 'HTML&CSS', isDone: false},
        {id: 4, title: 'StoryBook', isDone: false},
        {id: 5, title: 'Git', isDone: true}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTasks = (id: number) => {
        let resultTasks = tasks.filter(t => t.id !== id)
        setTasks(resultTasks)
    }

    let filteredTasks = tasks;

    if (filter === 'active') {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    if (filter === 'all') {
        filteredTasks = tasks.filter(t => t)
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }


    return (
        <div className="App">
            <Todolist header={'What to learn'}
                      tasks={filteredTasks}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
            />

            <Todolist tasks={filteredTasks}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
