import React, { useCallback, useState } from 'react'
import CustomButton from './components/CustomButton'
import Countdown from './components/CountDown'
const App = () => {
  const [counter,setCounter] = useState<number>(0);
  const [title,setTitle] = useState<string>("");
  const handleClick = useCallback(()=>{
    console.log("handled Click")
  },[])
  const cc = ()=>{
    console.log("handled Click")
  }
  return (
    <>
      <div>App</div>
      <CustomButton title={title} handleClick={handleClick}/>
      <p>{counter}</p>
      <input value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
      }}/>
      <button onClick={()=>{setCounter(counter+1)}}>Increase</button>
      <Countdown start={10}/>
    </>
  )
}
export default App