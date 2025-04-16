// import React from "react";
// // import Try from "./components/try";

// const App = () => {
//   return(
//     <section className="main-section">
//       <Posts/>
      
     
//     </section>

//   ) 
// };

// export default App;













import React, { Component } from "react";
// import "./App.css";
import Lifecycle from "./components/Lifecycle";
// import Person from "../components/person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.show ? <Lifecycle /> : <h1>Component Unmount</h1>}
        <br></br>
        <button onClick={() => this.setState({ show: !this.state.show })}>Hide and show</button>
      </div>
    );
  }
}

export default App;
