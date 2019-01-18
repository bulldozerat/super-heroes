import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Appearance from './Appearance';



let HeroInfo = (props: any) => {
    const InfoWrapper = styled.div`
        width:100%;
        background: red;
        .info-display {
            display: none;
        }
    `;

    return (
        <InfoWrapper>
            <Appearance info={props.order}/>
        </InfoWrapper>
    )
};

export default observer(HeroInfo);