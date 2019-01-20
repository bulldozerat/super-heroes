import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import HeroBadges from './components/HeroBadges';
import Search from './components/Search';
import './App.css';

const AppWrapper = styled.div`
  max-width: 1140px;
  margin: 40px auto 0;
`;

interface MyProps {
  heroStore?: any, 
  displayStore?: any
}

interface MyState {}

@inject('heroStore')
class App extends Component <MyProps, MyState>  {

  componentDidMount() {
    //this.props.heroStore.fetchHero();
  }

  render() {
    return (
      <AppWrapper>
        <Navigation />
        <Search />
        <Hero />
        <HomePage />
        <HeroBadges />
      </AppWrapper>
    );
  }
}

export default App;
