import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    display: flex;
    height: 60px;
    line-height: 60px;
    text-align: center;
    .nav-btn {
        background: #46546b;
        color: #fff;
        flex-grow: 1;
        flex-basis: 33%;
        height: 60px;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
    }
    .nav-active {
        background: #000;
    }
    .nav-middle {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }
`;

interface NavigationProps {
    heroStore?: any,
    displayStore?: any
}

let Navigation = inject("heroStore", "displayStore")(observer((props: NavigationProps) => {
    
    let callStore = (e: object) => {
        props.heroStore.hideHero();
        props.displayStore.activeNavButton(e);
    }

    return(
        <Nav>
            <Link to="/home" className="nav-btn" onClick={callStore}>Home</Link>
            <Link to="/all-characters" className="nav-btn nav-middle" onClick={callStore}>See all heroes</Link>
            <Link to="/search-characters" className="nav-btn" onClick={callStore}>Search for heroes</Link>
        </Nav>
        
    )
}));

export default Navigation;