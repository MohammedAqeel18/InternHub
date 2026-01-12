
import { getCurrentUser } from "@/lib/auth"
import { connectToDatabse } from "@/lib/db";
import TaskForm from "./task-form";
import TaskList from "./task-list";

export default async function Dashboard(){

  
    const user = await getCurrentUser();
    
    // if(!user) redirect("/login")
        
        const {db} = await connectToDatabse(
            process.env.MONGODB_URI!,
            process.env.MONGODB_DB_Name!
        );

        const tasks = await db 
        .collection("tasks")
        .find({userId: user.id})
        .toArray();
            return(
        <div>
        <h1> Welcome, {user.email}</h1>
       <TaskForm/>
      <TaskList
        tasks={tasks.map(task => ({
          _id: task._id.toString(),
          name: task.name
        }))}
      />
        </div>
    )
}

