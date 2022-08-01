import React from 'react';

class Paskaita4Class extends React.Component {
  constructor() {
    super();
    this.state = {
      secondVariable: 15,
    };
  }
  onClick() {
    this.setState((prevState) => ({
      secondVariable: prevState.secondVariable + 1,
    }));
  }

  componentDidMount() {
    alert('First time - Compoenent did mount');
  }

  componentDidUpdate() {
    alert('ComponendDidUpdate');
  }

  render() {
    console.log('Render');
    // let variable = 5;
    // const testOnClick = () => {
    //   console.log(variable);
    //   variable++;
    //   //   this.setState({ secondVariable: 10 });
    //   this.setState((prevState) => ({
    //     secondVariable: prevState.secondVariable + 1,
    //   }));
    // };
    return (
      <div>
        <h1>Class Component</h1>
        {/* <h3>this is variable {variable}</h3> */}
        <h3>This is value from state: {this.state.secondVariable}</h3>
        <button onClick={() => this.onClick()}>Increase</button>
      </div>
    );
  }
}
export default Paskaita4Class;
