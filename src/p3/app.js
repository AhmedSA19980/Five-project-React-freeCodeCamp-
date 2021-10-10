import { react } from '@babel/types';
import React from 'react'
import { Spinner } from 'react-bootstrap';
import DrumPud from '../p3/component/DrumComponent';
import {Sounds , secondSounds} from './Data/data';





class DrumSound extends React.Component{
 
   render(){
    const {soundPad,volumelevel, power} = this.props  // decide which sound pad play , soundPad props pass as props component
    //  inside new component 
    return(
    <div className={'drum'}>       
     {soundPad.map(drum =>( // map throuh data and decide which pad play on depends on drum State      
           <DrumPud 
           id={drum.id} 
           key={drum.id} 
           name={drum.name} 
           url={drum.url} 
           keyTrigger={drum.keyTrigger}// keyTrigger is Props , => drum keyTrigger state from Soubds
           keyCode={drum.keyCode}
           power={power}
           volumelevel={volumelevel}
           /> 
      ))}
    </div>
  )}
}

class DrumAdjecement extends React.Component{
    constructor(props){
     super(props)

     this.handleSound = this.handleSound.bind(this);
     this.handleVolume = this.handleVolume.bind(this);
     this.handlePower =  this.handlePower.bind(this);
     this.state = {
       display:'',
       power:true,
       drum:Sounds,
       volumeLevel:1.0,
     }
 }
 
  handlePower(){
    console.log('work , power')
    this.setState({power:!this.state.power})
  }
 
  handleSound(){
    if(this.state.drum=== Sounds){
      this.setState({drum:secondSounds})
    }else{
      this.setState({drum:Sounds})
    }
    setTimeout(()=> this.clearDisplay(),300)
  }


  handleVolume(event){
     let a = event.target.value / 100
    
     this.setState({volumeLevel:a,display:'vloume '+ a })
     console.log(this.state.volume)
     setTimeout(()=> this.clearDisplay(),1000)
   }



  clearDisplay(){
        this.setState({display:''})
  }
  render(){  
     const {drum,  power, volumeLevel} =  this.state

     return(
     <div className={'drum-section'}>
      <h1 className='project'>Drum Machine</h1>
       <DrumSound 
        power={power}
        soundPad={drum} 
        volumelevel={volumeLevel}
        /> {/* state  current spundPad*/}
       <div className={'drum-section__control'}>
            <span className={'header'}>On/Of</span>
           <div className={"toggle-container"}>
            <input type="checkbox" id="switch1" name="theme" onClick={this.handlePower}/><label htmlFor="switch1">Power</label>
        </div>
         <div >
            <p id='label'></p><span>{this.state.display}</span>
         </div>
         <div>
         <input
          className={"range"}
          type='range'
         id='volumeSlider'
         onChange={this.handleVolume}
         value={Math.round(volumeLevel * 100)}
         />
         </div>
         <span className={'header'}>Switch</span>
         <div style={{display:'block',padding:'12px 12px'}} className={"toggle-container"}>
            <input type="checkbox" id="switch" name="theme" onClick={this.handleSound}/><label htmlFor="switch">Toggle</label>
        </div>

       </div>
       </div>
     
     )
 }

}

class DrumMachine extends React.Component{


  render(){
    return(
      <section  id='drum-machine'>
        <div id='display'>
         < DrumAdjecement/>
         </div>
      </section>
    
    )
  }
 
}


export default DrumMachine