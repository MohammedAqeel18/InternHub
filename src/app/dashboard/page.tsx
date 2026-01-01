

export default async function Dashboard(){

   const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
   const tasks = await res.json()

   return(
      <div>
      <h2 className="text-2xl font-bold mb-4"> Dashboard</h2>
      <ul className="space-y-2">
      {tasks.map((task: any)=> (
         <li key={task.id} className="border p-3 rounded">
         {task.title} {task.completed? '✅' : '⏳'}   
         </li>
      ))}   
      </ul>   
      </div>
   )
     
}