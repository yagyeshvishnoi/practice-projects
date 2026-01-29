import React,{memo} from 'react'

const CustomButton = ({title,handleClick}:{title:string;handleClick:()=>void}) => {
    console.log("rerendered")
  return (
    <div>
        <button onClick={handleClick}>{title}</button>
    </div>
  )
}

export default memo(CustomButton);