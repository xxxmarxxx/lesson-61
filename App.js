class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    number3: 0,
  };

  handleClick1 = () => {
    this.setState({
      number1: this.state.number1 + 1,
    });
    //console.log(this.state.number1 + "w metodzie handleClick");
  };

  handleClick2 = () => {
    this.setState({
      number2: this.state.number2 + 1,
    });
    this.setState({
      number2: this.state.number2 + 1,
    });
    this.setState({
      number2: this.state.number2 + 1,
    });
    //  console.log(this.state.number2 + "w metodzie handleClick");
  };

  handleClick3 = () => {
    this.setState((state) => {
        // console.log(state);
      return {
        number3: state.number3 + 1,
      };
    });
    this.setState((state) => {
        // console.log(state);
        return {
          number3: state.number3 + 1,
        };
      });
    this.setState((prevState) => {
        console.log(prevState);
        console.log(this.state);
        return {
          number3: this.state.number3 + 1,
        };
      });
    
    console.log(this.state.number3);
  };

  render() {
    console.log(this.state.number1 + "w render");
    return (
      <>
      <h2 className="title">Lesson 61 SetState - asynchronicznosc i scalanie w praktyce</h2>
        <button onClick={this.handleClick1}>Podbij o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick2}>Podbij o 3</button>
        <h1>{this.state.number2}</h1>
        <button onClick={this.handleClick3}>Podbij o 3</button>
        <h1>{this.state.number3}</h1>
        <h4>spojrz w console browsera</h4>
      </>
    );
  }
}

ReactDOM.render(<Clicker />, document.getElementById("root"));
