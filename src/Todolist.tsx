import React from "react";

type TodolistPropsType = {
    header?: string
    number: number
    tasks?: TasksType[]
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (

        <div>
            <h3>{props.header ? props.header : 'Some tasks'}</h3>
            <h3>{props.number}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {props.tasks
                ? <ul>
                    {props.tasks.map((t, index) => {
                        return <li key={index}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span></li>
                    })}
                </ul>
                : <div>{"You have not tasks yet"}</div>}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    )
}
