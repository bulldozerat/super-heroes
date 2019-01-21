import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import styled from 'styled-components';
import HeroBadgesWrapper from './components/HeroBadgesWrapper';
import Search from './components/Search';
import { Route } from 'react-router-dom';
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
        <Route path="/search-characters" component={Search} />
        <Route exact path="/home" component={HomePage} />
        <Route path="/all-characters" component={HeroBadgesWrapper} />
      </AppWrapper>
    );
  }
}

export default App;
