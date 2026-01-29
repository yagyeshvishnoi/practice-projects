import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'
export interface counterRef{
    reset:()=>void;
    increase:(val:number)=>void;
    decrease:(val:number)=>void;
}
const Counter = (props:{},ref:Ref<counterRef>) => {
    const [count,setCount] = useState<number>(0);
    const reset = ()=>{
        setCount(0);
    }
    const increase = (val:number)=>{
        setCount((prev)=>prev+1);
    }
    const decrease = (val:number)=>{
        setCount((prev)=>prev-1);
    }
    useImperativeHandle(ref,()=>({
        reset,
        increase,
        decrease
    }))
  return (
    <div>
    <div>{count}</div>
    <button onClick={()=>setCount((prev)=>prev+1)}>increase</button>
    </div>
  )
}

export default forwardRef(Counter)