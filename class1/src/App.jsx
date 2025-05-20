import { useState, useEffect } from 'react';
import './App.css';
import Praju from './components/prasanth';
function App() {
  const [count, setCount] = useState(0);

 
  useEffect(() => {
    console.log("Count changed: ", count);
    if(count === 10){
      setCount(0);
    }
  }, [count]);

  return (
    <div className="container">
   
      <h1>Counter App </h1>
      <h1> Count: {count} </h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      
    </div>


  );
}

export default App;
