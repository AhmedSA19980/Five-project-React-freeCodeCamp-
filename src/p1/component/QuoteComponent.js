// style + structure component
import '../../style/p1/Qute.scss';
import React from 'react'
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteComponent =({handleNewQuote, CurrentQuote, AccentColor}) => {

    const {quote,  author} =  CurrentQuote

    return (
        <div className={'body'} style={{backgroundColor:`${AccentColor}`}}  >

        <div id="quote-box" className={'Quote-sec'}>
        <div  className={'page'} > 
                <p id="text" className={'Quote-sec__quote'}>
            {quote}
                
                </p>
                <span className={'Quote-sec__owner'} id="author" >{author}</span>
                <Button id="tweet-quote"  className={'btn dark'}
                        href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
                ><FontAwesomeIcon icon={faTwitter} />
            twitter</Button>
             <button id="new-quote" className={'btn b-hover'} type='button' onClick={()=>handleNewQuote()} //func
                >New Quote</button>
            </div>
            </div>
        </div>
          
    )
}

export default QuoteComponent