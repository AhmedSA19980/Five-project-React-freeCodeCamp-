import React,{useEffect} from 'react'
import { Button } from 'react-bootstrap'

/*export const Sound = ({id,src}) => {

  function playAudio(){
      console.log('lobe')
     const a =  document.getElementById(id);
     console.log(a)
     a.play()
  }
  

    return (
        <div id={'beep'}>
            <button onClick={playAudio} type='button' value='btn'>
            <audio id={id} 
             src={src}
             />ll
             </button>
        </div>
    )
}*/

export const resetAudio = audio => {
  if (!audio) {
    audio.pause();
  }
  audio.currentTime = 0;

};

export const resetAudioAndPlay = audio => {

  resetAudio(audio);
  audio.play();
};


