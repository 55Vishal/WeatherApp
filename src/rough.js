
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [num , setNum] = useState(0)

  const incNum = () =>{
     setNum(num + 1);
  };            
    const decNum = () => {
      // if(num > 0){
      //   setNum(num-1); 
      // }else{
      //   setNum(0);
      // }
      setNum(num > 0 ? num - 1 : 0);
    };

  return (
<>
<div className='main_div'>

  <div className='center_div'>
  <h3>Counter Application</h3>
    <h1> {num} </h1>
     <div className='but_div'>
      <div><button className='btn1' onClick={incNum}> Increment </button></div>
      <div><button className='btn2' onClick={decNum}> Decrement </button></div>

     </div>
  </div>
</div>
</>
 )}
export default App;
