import React from 'react';
import { observer, inject } from 'mobx-react';
import test from '../../../util/hpHeroes';
import styled from 'styled-components';

const HpHeroWrapper = styled.div`
    flex-grow: 1;
    flex-basis: 23%;
    max-width: 23%;
    margin: 0 1%;
    position: relative;
    img {
        width: 100%;
        cursor: pointer;
    }
`;

let HpHero = inject("heroStore")(observer((props) => {
    
    return (
        test.map(
            (e, index) => {
                const searchName = e[1];
                const image = e[2];
                
                return(
                    <HpHeroWrapper key={index}>
                        <img src={image} alt='' data-name={searchName} onClick={props.heroStore.fetchHero}/>
                    </HpHeroWrapper>
                )
            }
        )
    )
}));

export default HpHero;