import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log('Component Did Mount');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {

    console.log('Component Did Update');
    console.log('Previous Props:', prevProps);
    console.log('Previous State:', prevState);
    }
  }
  
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log('Render');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment</button>
        
      </div>
    );
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }
}
export default LifecycleDemo;