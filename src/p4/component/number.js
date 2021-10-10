import React from 'react'
import '../../style/p4/Calculater.scss'
import { BtnValue } from './BtnValue';


//rfc




export default function Number(props) {

    const {handleOperator, handleNumber, handleDecimal, handleEqual, handleClear}= props;


    
    
        // **note: onClick is a property 
        // * check btnValue component 
        // * we get name instead value :cuz in compoent we passed value to name attrbuite 
    return (
        <div className={'number'}>
            <div className={'span'}><BtnValue id={"clear"} value={'AC'} classStyle={'number__step'} onClick={handleClear} /></div>
            <div><BtnValue id={"divide"} value={'/'} classStyle={'number__step'}  onClick={e => handleOperator(e.target.name)}/></div>
            <div><BtnValue id={"multiply"} value={'*'} classStyle={'number__step'}  onClick={e => handleOperator(e.target.name)} /></div>
            <div><BtnValue id={'seven'} value={7} onClick={e=>handleNumber(e.target.name)} /></div>
            <div> <BtnValue id={'eight'} value={8}onClick={e=>handleNumber( e.target.name)} /></div>
            <div><BtnValue id={'nine'} value={9}onClick={e=>handleNumber( e.target.name)} /></div>
             <div> <BtnValue id={"add"} value={'+'} classStyle={'number__step'} onClick={e => handleOperator(e.target.name)}/></div>
            <div><BtnValue id={'four'} value={4} onClick={e=>handleNumber( e.target.name)}/></div>
            <div><BtnValue id={'five'} value={5} onClick={e=>handleNumber( e.target.name)} /></div>
             <div><BtnValue id={'six'} value={6} onClick={e=>handleNumber( e.target.name)}/></div>
            <div><BtnValue id={"substract"} value={'-'} classStyle={'number__step'}  onClick={e => handleOperator(e.target.name)} /></div>
            <div><BtnValue id={'one'} value={1}  onClick={e=>handleNumber( e.target.name)} /></div>
             <div><BtnValue id={'two'} value={2} onClick={e=>handleNumber( e.target.name)}/></div>
            <div><BtnValue id={'three'} value={3} onClick={e=>handleNumber( e.target.name)} /></div>
            <div><BtnValue id={'equals'} value={'='}classStyle={'number__step'}  onClick={handleEqual}/></div>
            <div className={'span1'}><BtnValue id={'zero'} value={0} onClick={e => handleNumber(e.target.name)} /></div>
            <div><BtnValue id={"decimal"} value='.' classStyle={'number__step1'} onClick={e => handleDecimal(e.target.name)} /> </div>          
         
        

        
          
         
        </div>
    )
}





