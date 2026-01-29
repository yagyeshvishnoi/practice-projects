import './TodoItem.css'
import React from 'react'
import { todoDelete, todoState, todoToggle } from '../feature/todoSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../feature/store'
const TodoItem = ({todo}:{todo:todoState}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleToggle = ()=>{
    dispatch(todoToggle(todo.uid));
  }
  return (
    <div className='item'>
      <p>{todo.text}</p>
      <button onClick={handleToggle}>{todo.fullfilled?"Back":"Done"}</button>
      <button onClick={()=>{dispatch(todoDelete(todo.uid))}}>Delete</button>
    </div>
  )
}

export default TodoItem