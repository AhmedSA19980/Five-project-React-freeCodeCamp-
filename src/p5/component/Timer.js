import React from 'react'




export const  AddClassTimer = (id,classname) =>{
         document.getElementById(id).classList.add(classname)
 
}
export const removeClassTimer = (ele,classname) =>{
    document.getElementById(ele).classList.remove(classname)

};


export const TimerDisplay = ({Minutes ,Seconds, CurrentLength}) => {
    return (
        <div>
            <h3 id="timer-label">{CurrentLength}</h3>
                    
            <h1 id="time-left">{Minutes}:{Seconds}</h1>
        </div>
    )
}
