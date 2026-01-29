import React,{useRef, useState} from 'react'
import Counter, { counterRef } from './components/Counter'
import { ModeContext } from './ContextCreate'
import Child from './components/Child'

const App = () => {
  const [mode,setMode]= useState<string>("light")
  const counterRef = useRef<counterRef>(null)
  return (
    <ModeContext.Provider value={{mode,setMode}}>
    <div>
      <Counter ref = {counterRef} />
      <button onClick={()=>counterRef.current?.reset()} >Reset btn from parent</button>
      <button onClick={()=>counterRef.current?.increase(1)}>increase</button>
      <button onClick={()=>counterRef.current?.decrease(1)}>decrease</button>
      <Child />
    </div>
    </ModeContext.Provider>
  )
}

export default App