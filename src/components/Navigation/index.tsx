import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const Nav = styled.nav`
    background: #46546b;
    color: #fff;
    width: 100%;
    display: flex;
    height: 60px;
    line-height: 60px;
    text-align: center;
    .nav-btn {
        flex-grow: 1;
        flex-basis: 33%;
        height: 60px;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
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
let Navigation = inject("displayStore")(observer((props: any) => {
    return(
        <Nav>
            <div className="nav-btn nav-active" data-order="1" onClick={props.displayStore.navLogic}>Home</div>
            <div className="nav-btn nav-middle" data-order="2" onClick={props.displayStore.navLogic}>See all heroes</div>
            <div className="nav-btn" data-order="3" onClick={props.displayStore.navLogic}>Search for heroes</div>
        </Nav>
        
    )
}));

export default Navigation;