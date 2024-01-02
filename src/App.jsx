import React from 'react'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const[Color,setColor] = useState(0);
 
  return(
    
    <div className ='stars'>
     <div>
      <h2 style={{fontFamily:"sans-serif"}}>Rate This</h2>
      </div> 
      <div>
        {[...Array(5)].map((star,i)=>{
          i+=1;
          return(
          <button
          type='button'
          key = {i}
          className={i<=Color?"s2":"s1"}
          onClick={()=>{
            setColor(i);
        }}>
          <span ><h1>&#9733;</h1></span>
          </button>
          )
          
        })}
      </div>
    </div>
  )
}

export default App;

