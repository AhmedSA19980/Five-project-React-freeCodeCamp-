
// Session & break under rules
export const restrictedTime = duration =>{
     return duration > 0 && duration <=60
     
  }

  // return restrictedTimer && check timer set to false
export const TimeCheck = (duration, TimerOn)=>{
  return restrictedTime(duration) && TimerOn===false
}