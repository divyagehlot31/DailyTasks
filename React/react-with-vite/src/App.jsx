import React from "react";
import { Posts } from "./components/Posts";

const App = () => {
  return(
    <section className="main-section">
      <Posts/>
    </section>

  ) 
};

export default App;












// function App() {
//   return (
//     <div className='App'>
//       <h1>My Todos</h1>

//       <div className='todo-wrapper'>
//         <div className='todo-input'>
//           <div className='todo-input-item'>
//             <label>Title</label>
//             <input type="text" placeholder="What's the task title?"/>
//           </div>
//           <div className='todo-input-item'>
//             <label>Description</label>
//             <input type="text" placeholder="What's the task descrption?"/>
//           </div>
//           <div className='todo-input-item'>
//             <button type="button" className='primaryBtn'>Add</button>
//           </div>
//         </div>

//         <div className='btn-area'>
//           <button>Todo</button>
//           <button>Completed</button>
//         </div>
//       </div>

//       <TodoApp/>
//     </div>
//   )
// }

//Lifecycle demo

// import React, { Component } from "react";
// import "./App.css";
// import Lifecycle from "../components/Lifecycle";
// // import LifecycleDemo from '../components/LifecycleDemo';
// // import Person from "../components/person";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.show ? <Lifecycle /> : <h1>Component Unmount</h1>}
//         <br></br>
//         <button onClick={() => this.setState({ show: !this.state.show })}>Hide and show</button>
//       </div>
//     );
//   }
// }

// export default App;
