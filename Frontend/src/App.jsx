import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import axios from 'axios'
import { baseUrl } from './url'






const App = () => {
  const [todos ,setTodos] = useState([]);
useEffect(()=>{
   axios.get(`${baseUrl}/todo`).then((response)=>{
    setTodos( response.data);
    console.log(todos);
  })
} ,[])
  return (
    <div className='w-full flex flex-col items-center  min-h-screen bg-[#353839] p-4'>
     <nav className='text-white text-4xl font-protest tracking-wide  text-center'>TO-Do App</nav>
     <div className='mt-20'><AddTodo setTodos={setTodos} /></div>

     <div className='mt-8 flex flex-col gap-3'>
     {
          (todos.length === 0) ? (
            <div className='text-white text-2xl font-protest'>No Task Found</div>
          ) : (
            todos.map((todo) => {
              return <Todos key={todo._id} id ={todo._id} todos={todos} task={todo.task}  setTodos
              ={setTodos}/> // Add return statement here
            })
          )
        }
     </div>
    </div>
  )
}

export default App
