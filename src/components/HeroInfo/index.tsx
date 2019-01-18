import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Appearance from './Appearance';



let HeroInfo = (props: any) => {
    const InfoWrapper = styled.div`
        box-sizing: border-box;
        width:100%;
        background: #F4F6F8;
        padding: 30px 30px 50px 30px;
        .info-display {
            display: none;
        }
        h1{
            margin: 5px 0 5px 0;
        }
        .info-property {
            font-weight: bold;
        }
    `;

    return (
        <InfoWrapper>
            <Appearance info={props.info.appearance} title="Appearance" margin="0"/>
            <Appearance info={props.info.biography} title="Biography" margin="0"/>
            <Appearance info={props.info.connections} title="Connections" margin="0"/>
            <Appearance info={props.info.work} title="Work"/>
        </InfoWrapper>
    )
};

export default observer(HeroInfo);