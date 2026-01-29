import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch, RootState } from './feature/store';
import { useEffect } from 'react';
import { addTodo, todoCompleted } from './feature/todoSlice';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoList } from './components/TodoList';
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state:RootState)=>state.todo);
  console.log(todoList);

  console.log(todoList)
  return (
    <div className="App">
      <h1 className='header'>To-Do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
