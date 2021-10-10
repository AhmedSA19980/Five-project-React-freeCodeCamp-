import { auto } from '@popperjs/core'
import React from 'react'
import '../../style/p3/drum.scss';
import {Sounds,secondSounds} from '../Data/data';

class DrumPud extends React.Component{
    constructor(props){
        super(props)
      this.PlaySound =  this.PlaySound.bind(this);
     
     
    }


    handleKeyPress = (event)=>{
     
      const {keyCode} = this.props
      if(event.keyCode === keyCode){
        this.PlaySound()
      }
    
    }

   componentDidMount() {
     
       window.addEventListener('keydown', this.handleKeyPress)
       
      }

   //componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method,
   // such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount
    componentWillUnmount(){
       window.removeEventListener('keydown', this.handleKeyPress)

    }

   PlaySound(){
      let id =  document.getElementById(this.props.id) ;
         id.classList.add('white')
        //console.log( 'First', Sounds=== Sounds ||  'Second', secondSounds===secondSounds)
         if(this.props.power){
          let  audioEl = document.getElementById(this.props.keyTrigger);
          let label= document.getElementById('label');
          audioEl.currentTime = 0
          label.innerText = this.props.id
          console.log(label); 
            audioEl.volume =this.props.volumelevel ;
            audioEl.play()
         }
    
    }

    

 
    render(){
        const {id,  keyTrigger,keyCode,url, power, volumelevel} =  this.props
        return(
         
            <button id={id}  type='button' onClick={ this.PlaySound} className={'drum-pad  btn-music'}>
                <span>{keyTrigger}</span> 
                <audio className={'clip'} id={keyTrigger} src={url}/>
            </button>  
      
        ) 
    }
}
//fcuntion sumarray
export default DrumPud