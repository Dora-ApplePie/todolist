import React from "react";
import {FilterValuesType} from "./App";

type TodolistPropsType = {
    header?: string
    tasks?: TasksType[]
    removeTasks: (id: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.header ? props.header : 'Some tasks'}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {props.tasks?.length !== 0
                ? <ul>
                    {props.tasks?.map((t, index) => {
                        return <li key={index}><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTasks(t.id)
                            }}>x</button>
                        </li>
                    })}
                </ul>
                : <div>{"You have not tasks yet"}</div>}
            <div>
                <button onClick={() => {props.changeFilter("all")}}>All</button>
                <button onClick={() => {props.changeFilter("active")}}>Active</button>
                <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    )
}
