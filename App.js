import React from 'react';

class App extends React.Component {

  state = {
    clock: new Date() };


  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ clock: new Date() });
    }, 1 * 100);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { clock } = this.state;

    return (
    <div>
     {clock.toLocaleTimeString()}
    </div>);
  }
}

export default App;