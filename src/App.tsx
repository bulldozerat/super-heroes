import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';


interface MyProps {
  heroStore?: any
}

interface MyState {}

@inject('heroStore')
@observer
class App extends Component <MyProps, MyState>  {

  componentDidMount() {
    this.props.heroStore.fetchSingleCard();
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
      </div>
    );
  }
}

export default App;
