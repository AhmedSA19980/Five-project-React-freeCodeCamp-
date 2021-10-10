import React from 'react'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

export const Lables = (
          {id,
            ADDid,
           MINid,
           TitleLength,
           Value,
           onChange } ) => {
    //const = props;



    return (
        <div className={'Lengths'}>
        <h3 id={`${id}-label`} >{TitleLength}</h3>
            <div className={'Lengths__component'}>
              <button id={`${id}-Increment`} 
              onClick={()=> onChange(1)}  
              value='+'
              title='Increment'
              aria-label='Increment by 1 minute'
              className={'Btn'}
              ><FontAwesomeIcon icon={faArrowUp } size='3x' />
              </button>
               <h2 id={`${id}-length`}>{Value}</h2>
              <button id={`${id}-Decrement`}
               onClick={()=> onChange(-1)}
                value='-'
                title='Decrement'
                aria-label='Decrement by 1 minute'
                className={'Btn'}
                >
                 <FontAwesomeIcon icon={faArrowDown} size='3x' />
                </button>     
            </div>
        </div>
    )
}
