"use client";

import { deleteTask } from "@/actions/tasks";
import { useState } from "react";

type Task= {
    _id:string;
    name:string
}

export default function TaskList({tasks}: {tasks: Task[]} ){

const [loaclTasks, setLocalTasks] = useState(tasks);

const handleDelete = async (taskId:string)=> {
    setLocalTasks(loaclTasks.filter(t=> t._id !== taskId));
    await deleteTask(taskId);
};

return(
    <ul>
        {loaclTasks.map(task => (
            <li key={task._id}>
                {task.name}
                <button onClick={()=> handleDelete(task._id)}> Delete</button>
            </li>
        ))}
    </ul>
)


}