import logo from './logo.svg';
import { useState } from 'react';

function AppTime() {
 
  const [time,          setTime] = useState(0);

  const updateTime = ()=>{
      setTime(time+1);
  }
  const downTime = ()=>{
    setTime(time-1);
  }
  return (
    <div className="AppTime">
      <h2>{time}시</h2>
      <button onClick={updateTime}>+</button>
      <button onClick={downTime}>-</button>

    </div>
  );
}

export default AppTime;
