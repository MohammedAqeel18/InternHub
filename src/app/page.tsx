
export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const posts = await res.json()
  return ( 
   
<> 

    <h2 className="text-2xl font-bold mb-4"> Latest Intern Posts</h2>
    <ul className="space-y-2">
      {posts.map((posts:any)=>(
        <li key={posts.id} className="border p-3 rounded">
          {posts.title}

        </li>
      ))}
    </ul>

    
    </>
  )
}
