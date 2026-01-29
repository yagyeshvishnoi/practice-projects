import './TodoList.css'
import React from 'react' ;
import { useSelector } from 'react-redux'; 
import { RootState } from '../feature/store'; 
import TodoItem from './TodoItem';
export const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todo)

  return (
    <div className='container'>
      <div className='pending'>
        <h2>Pending Task</h2>
        {todoList.map((todo) => {
          if(todo.fullfilled === false){
            return <TodoItem key={todo.uid} todo={todo}/>
          }
        }
        )}
      </div>
      <div className='fullfilled'>
        <h2>Completed Task</h2>
        {todoList.map((todo) => {
          if(todo.fullfilled === true){
            return <TodoItem key={todo.uid} todo={todo}/>
          }
        }
        )}
      </div>
    </div>
  )
}
