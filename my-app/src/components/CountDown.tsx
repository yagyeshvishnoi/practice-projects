import React, { useEffect, useRef, useState } from 'react'

const CountDown = ({start}:{start:number}) => {
    const refCounter = useRef<NodeJS.Timeout | null>(null);
    const [counter,setCounter] = useState<number>(start);
    const startCounter = ():void => {
        if(refCounter.current)return;
        refCounter.current = setInterval(()=>{
            setCounter((prev):number=>{
                if(prev<=1){
                    stopCounter();
                    return 0;
                }
                else{
                    return prev-1;
                }
            });
        },250)
    }
    const stopCounter = ()=>{
        if(refCounter.current){
            clearInterval(refCounter.current);
        }
        refCounter.current= null;
    }
    const resetCounter = ()=>{
        stopCounter();
        setCounter(start);
    }
    useEffect(()=>{
        startCounter();
        return ()=>{
            stopCounter();
        }
    },[])
  return (
    <div>
        <h1>The count is {counter}</h1>
        <button onClick={()=>{startCounter()}}>Start</button>
        <button onClick={()=>{stopCounter()}}>Stop</button>
        <button onClick={()=>{resetCounter()}}>Reset</button>
    </div>
  )
}

export default CountDown