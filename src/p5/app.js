import React, {useState,useEffect , useRef} from 'react'
import { Lables } from './component/Lables';
import { TimerDisplay } from './component/Timer';
import '.././style/p5/FiveClock.scss'
import {resetAudio,resetAudioAndPlay} from './component/Sound'
import { TimeCheck } from './check/TimerCheck'
import { AddClassTimer,removeClassTimer } from './component/Timer';
import { addScalarDependencies } from 'mathjs';

//* problem  break runs after session loop two times [sloved]
//* problem session and break lengths INC >60  , and Dec <0 [sloved]

//* didn't set the audio   [sloved]







 const FiveClock = () => {

    const[Break ,setBreak ]= useState(5)
    const [Session,  setSession] = useState(25)
    const [currentTimerLabel , setCurrentTimerLabel]= useState('Session')
    const [Timer , setTimer] = useState({minutes:Session , second:0})
    const [TimerOn, setTimerOn]= useState(false)
    const audioRef =useRef(null)


   useEffect(() => {
    if (!TimerOn) {
      return;
    }
    if (Timer.second === 0) {
      if (Timer.minutes <= 0) { // checks minute and seconds reach to ultimate down num 00: regarding if length  
        if (currentTimerLabel === 'Session') {
         
          setCurrentTimerLabel('Break');
          setTimer({ minutes: Break, second: 0 }); //switch state(length) 
        } 
        else {
          setCurrentTimerLabel('Session');
          setTimer({ minutes: Session, second: 0 });
        }
       resetAudioAndPlay(audioRef.current)
      }
    }
  }, [TimerOn, Break, currentTimerLabel, Session,Timer.second, Timer.minutes]);

    useEffect(() => {
     // start timer when click, not when app loadded
    if (!TimerOn ) {
      return;
    }

    //repeat a specified function at every given time-interval. till func expired 
    const liveCountdown = setInterval(() => { 
      if (Timer.second === 0) {
        setTimer(t => ({ minutes: t.minutes - 1, second: 59 }));
      } else {
        setTimer(t => ({ ...t, second: t.second-1 }));
      }
    }, 1000);
  

    return () => clearInterval(liveCountdown); // clear interval 
  }, [TimerOn, Timer.second, Timer.minutes]);

   const  startTimer = ()=>{
         setTimerOn(true);   
         AddClassTimer('session', 'public')
          
   }
  
    function stopTimer(){
        clearInterval(Timer);
         setTimerOn(false);
         AddClassTimer('session', 'public');
    };


 
   const  breakLength=(off)=>{
       
    const n = Break + off;
        if(!TimeCheck(n, TimerOn)){
         return;
       }
        setBreak(n)
        removeClassTimer('session','public')
   }
 
 


   const  SessionLength = (off)=>{
       //setTimer({minutes:Session , second:0})
       console.log(off)
       const  n = Session + off
       if(!TimeCheck(n, TimerOn)){
         return;
       }
     setSession(n);
     setTimer({ second: 0, minutes: n });
     removeClassTimer('session','public')
   }


    const  handleReset = ()=>{
      setBreak(5)
      setSession(25)
      setTimerOn(false)
      setTimer({minutes:25 , second:0})
     resetAudio(audioRef.current)
     removeClassTimer('session', 'public')
  
 }

   
    return (
        <div className={'clock'}>
            <div  className={'clock__address'}>
                <h1>25 + 5 Clock</h1>
                <div className='Lengths__Length'>
                <Lables 
                id='break'
                TitleLength='break Length'
                Value={Break}
                onChange={breakLength}
                 /> 
                <Lables 
                id='Session'
                TitleLength='Session Length'
                Value={Session}
                onChange={SessionLength}
                 /> 
                </div>
                <div className={'border--Timer'}>
                 <TimerDisplay
                 CurrentLength={currentTimerLabel==='Session'? <h3 id='session'>{'Session'}</h3> :<h3 id='breaka'>{'Break'}</h3>}
                 Minutes={Timer.minutes}  
                 Seconds={Timer.second}
                 />
                { TimerOn === false && (Session !==0 || Session >=25 ) && (
                    <button onClick={()=> startTimer()} type='button' className={'Btn start'} id="start_stop">Start</button>
                )}
                { TimerOn === true && (Session !==0 ) && (
                    <button onClick={()=> stopTimer()} className={'Btn stop'} id="start_stop">stop</button>
                )}
                <button onClick={()=> handleReset()}className={'Btn reset'}  id="reset">Reset</button>
               </div>
            </div>
          <audio id={'beep'} 
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"  
          ref={audioRef} />
        </div>
    )
}
export default FiveClock

