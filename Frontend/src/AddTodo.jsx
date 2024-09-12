import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = (props) => {
  const [task,setTask] = useState('');


  const  handleSubmit = (event)=>{
    event.preventDefault();
    if (task!=''){
      axios.post('https://todo-app-beta-self.vercel.app/todo/new' , {task:task})
      .then((response)=>{
        console.log(response);
        setTask('');
        axios.get('https://todo-app-beta-self.vercel.app/todo').then((response) => {
          props.setTodos([...response.data]); // Update the todos state with the new array of tasks
        });
      })
    }
  }

  const handleInputChange = (event)=>{
    setTask(event.target.value);
  }
  return (
   

    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex gap-4'>
            <input onChange={handleInputChange}     className='w-full px-4 py-2 outline-none  border-none rounded-md focus:ring-blue-300 focus:ring-2 focus:ring-offset-2 focus:border-blue-500'   type="text" value={task} id="" placeholder='Enter the Task' />
            <input className='bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-300 focus:ring-2 focus:ring-offset-2 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out'  type="submit" value="Add Task" />
            </div>
        </form>
        
    </div>
  )
}

export default AddTodo