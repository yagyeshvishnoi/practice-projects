import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../feature/store';
import { addTodo } from '../feature/todoSlice';
import { nanoid } from '@reduxjs/toolkit'
import './TodoForm.css';
const TodoForm = () => {
  const [task,setTask] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();

    
    dispatch(addTodo({
      uid:nanoid(),
      text:task,
      fullfilled:false
    }))
    setTask("");
  }
  return (
    <div className='formContainer'>
        <form onSubmit={handleSubmit} className='formItem'>
            <input placeholder='Task Todo....'
            value =  {task} onChange={(e)=>{setTask(e.target.value)}}></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm