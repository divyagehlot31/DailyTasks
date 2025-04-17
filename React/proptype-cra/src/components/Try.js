import React, { useState, useEffect } from "react";

function Try() {
  const [data, setData] = useState(1);

  useEffect(() => {

    console.log("DATA before update:", data);          

    setData((prev) => prev + 1);
    // setData(prev => prev + 1);  //return both 2times?

    // setData(data + 1);
    // setData(data + 2);  //return 2nd setData


    // console.log(data) //return old value- before updated value

  },[]);

useEffect(()=>{
  console.log("after updated data:", data)
},[data])


  return <h2>Data: {data}

        {/* <button onClick={()=>{setData(prev => prev + 1)}}>setdata</button> */}
        </h2>;


}

export default Try;
