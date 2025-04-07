import {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from "./Button.tsx";

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType

    removeAllTasksInOneTodo: (todolistId: number) => void
  }

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask(props.title, props.id)
        }
    }

    const addTaskHandler = () => {
        props.addTask(props.title, props.id)
    }

    const removeTaskHandler = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }

    return <div>

        <h3> {props.title}
            <Button onClick={()=>props.removeTodolist(props.id)} title={"X"}/>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button title={"+"} onClick={addTaskHandler}/>
            {error && <div className="error-message">{error}</div>}
            <Button title={"X"} onClick={()=>props.removeAllTasksInOneTodo(props.id)}/>
        </div>
      
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={"X"} onClick={()=>removeTaskHandler(t.taskId)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button title={"All"} classes={props.filter === 'all' ? "active-filter" : ""}
                    onClick={()=>props.changeFilter("all", props.id)}/>
            <Button title={"Active"} classes={props.filter === 'active' ? "active-filter" : ""}
                    onClick={()=>props.changeFilter("active", props.id)}/>
            <Button title={"Completed"} classes={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={()=>props.changeFilter("completed", props.id)}/>
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


