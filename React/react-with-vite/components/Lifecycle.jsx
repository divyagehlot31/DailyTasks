import React, { Component } from "react";

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount: when component 1st time render");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }


  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Before the update, the count was " + prevState.count);
  }


  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.count !== this.state.count) {
      console.log("Component Updated");

    //   console.log("Previous Prps:", prevprops);
    //   console.log("Previous State:", prevstate);
    //   console.log("State:", this.state.count);
    }
  }

  componentWillUnmount(){
        console.warn("Component Unmount")


  }

  render() {
    return (
      <div>
        <h2>Component's Lifecycle example</h2>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.increment.bind(this)}>Click me</button> */}
        <button onClick={() => this.increment()}>Update</button>

      </div>
    );
  }
}

export default Lifecycle;
