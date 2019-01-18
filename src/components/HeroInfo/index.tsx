import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
    width:100%;
    background: red;
`;

let HeroInfo = inject("heroInfoStore")(observer((props) => {
    return (
        <InfoWrapper>
            {props.heroInfoStore.biography['full-name']}
        </InfoWrapper>
        
    )
}));

export default HeroInfo;