import React, { useEffect, useState } from "react";
import  axios from "axios"
import { MdDeleteSweep } from "react-icons/md";

const Todos = (props) => {

const deleteTodo = async(id)=>{
  await axios.delete("http://localhost:4001/todo/delete/"+id)
  .then((response)=>{
     console.log(response);
      window.location.reload()
  })
}
  return (

    <div>
      <div className="w-[18rem] min-h-[2.5rem] p-1 rounded-md flex justify-around items-center text-wrap bg-slate-300">
        <div className="">
          <input className="text-blue-500 w-4 h-4" type="checkbox" name="" id="" />
        </div>
        <div className="text-lg w-[80%] pl-1 pr-1  font-mono font-semibold">{props.task}</div>
        <div className="text-blue-500   text-xl font-semibold  " onClick={()=>deleteTodo(props.id)}>
          < MdDeleteSweep />
        </div>
      </div>
    </div>
  );
};

export default Todos;