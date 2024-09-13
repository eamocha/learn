import './App.css';
import {React, useEffect, useState, useRef} from 'react';
import atinga1 from './components/atinga1/atinga1';
import HeaderComponent from './HeaderComponent';


function App() {
  const [count,setcount]= useState(0);
  let [car,setsetCar]=useState({
    brand:"Toyota",
    color:"Red",
    year:"2024"
  })
  const  [counting,setCounting]=useState(0)
  useEffect(()=>{
  setTimeout(() => {
    setCounting((counting)=>counting+1);
    
  }, 1000);
},[count]
)
////
const [inputValue,setInputValue]=useState(0)

const counter=useRef(0);

useEffect( ()=>{
    counter.current=counter.current+1;
  }
)
//////

  function increament(){
    setcount(count+1);
  }

  function decreament() {
    setcount(count+1);
    setsetCar(car)
    
    }


    /////use useRef
const age=useRef();

const focusInput=()=>{
  age.current.focus();
}

  return (
    
    <div className="App">    
      <header className="App-header">
        <HeaderComponent/>
        <atinga1></atinga1>
        <button onClick={increament} id='increase'>Increase</button>  <span>{car.color} {count}</span><button onClick={decreament} id="decrease">Decrease</button>    
        <p>auto counting {counting}</p>
        <label>Enter your name</label>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} ></input>
        <p>value of counter {counter.current}</p>
        <label>Enter Age</label>
        <input type='text' ref={age}/>
        <button onClick={focusInput} >Focus input</button>
        
    
      </header>
     
     
    </div>
  );
}

export default App;
