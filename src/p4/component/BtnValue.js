import React from  'react';


//The name attribute specifies the name for a <button> element.
const style={
    width:'100px',
    height:'100px',
    backgroundColor:'pink',
    color:'black',
    fontSize:'16px',
    fontWight:'500'

}

export const BtnValue = (props) =>{
    const {id,value,onClick,classStyle}= props;

    return (
        <div>
            <button id={id} name={value}  className={`${classStyle}`}   onClick={onClick}>{value}</button>
        </div>
    )

}



