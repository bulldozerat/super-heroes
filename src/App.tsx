import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Hero from './components/Hero';
import styled from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  max-width: 1140px;
  margin: 40px auto 0;
`;

interface MyProps {
  heroStore?: any
}

interface MyState {}

@inject('heroStore')
class App extends Component <MyProps, MyState>  {

  componentDidMount() {
    this.props.heroStore.fetchHero();
  }

  render() {
    return (
      <AppWrapper>
        <Hero />
      </AppWrapper>
    );
  }
}

export default App;
