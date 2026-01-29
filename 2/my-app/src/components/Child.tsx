import React from 'react'
import { useMode } from '../ContextCreate'

const Child = () => {
    const {mode,setMode} = useMode();
    const func = ()=>{
        if(mode === "light")setMode("dark");
        else setMode("light");
    }
  return (
    <div>
        {mode}
        <button onClick={func}>Change Mode</button>
    </div>
  )
}
export default Child