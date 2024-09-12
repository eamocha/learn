import './App.css';
import {React, useEffect, useState} from 'react';


function App() {
  const [count,setcount]= useState(0);
  let [car,setsetCar]=useState({
    brand:"Toyota",
    color:"Red",
    year:"2024"
  })

  function increament(){
    setcount(count+1);
  }

  function decreament() {
    setcount(count+1);
    setsetCar(car)
    
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={increament} id='increase'>Increase</button>  <span>{car.color} {count}</span><button onClick={decreament} id="decrease">Decrease</button>    
      
      
      </header>
      body
    </div>
  );
}

export default App;
