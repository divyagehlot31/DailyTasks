import React from "react"

function Try(message, message2) {
    const update1 = ()=>{
        alert("using normal handling");
    }

    const update2 = (a)=>{
        alert(a);
    }

    const update3 = (a , b)=>{
        alert( b.type);
    }

    const message1=()=>{
        alert(message2);
    }

    return(
        <>
         <button onClick={update1}>Update1</button>

         <button onClick={()=>{update2("passing argument")}}>Update2</button>

         <button onClick={()=>{update3("event type check" , event)}}>Update3</button>

         <button onClick={()=>{alert("Inline alert")}}>Update4</button>

         <button message="1" message2="2" onClick={message1}>
        Play Movie
      </button>
      
         </>

         

    )
}

export default Try;

