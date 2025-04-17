import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function Lifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
   
    console.log("Count updated:", count);


  }, [count]);

  return (
    <div className='text-align-center mt-3' >
      <h1>React Lifecycle Demo</h1>
      <h3 >Count: {count}</h3>
      <button onClick={() => setCount(count + 1)} className='mt-4' style={{ backgroundColor: "#B266FF" }}>Increase</button>
    </div>
  );
}

export default Lifecycle;