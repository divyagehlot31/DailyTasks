import React, {useState}from 'react'
import './App.css'
import Lifecycle from './Components/Lifecycle'
import Example3 from './Components/try';

function App() {
  const [show, setShow] = useState();

  return (
    <div>
      {show && <Lifecycle />}
            
      <button onClick={() => setShow(!show)}  className='mt-4' style={{ backgroundColor: "#B266FF" }}>
       <h5>{show ? "Unmount Component" : "Mount Component"}</h5> 
      </button>
      <Example3/>
    </div>
  );
}

export default App;


