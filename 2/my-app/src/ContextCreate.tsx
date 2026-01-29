import  { useContext } from 'react'
import { createContext } from 'react';
interface GlobalContext{
    mode:string;
    setMode:(c:string)=>void;
}
export const ModeContext = createContext<GlobalContext>({
    mode:"light",
    setMode:()=>{}
})

export const useMode =()=> useContext(ModeContext);