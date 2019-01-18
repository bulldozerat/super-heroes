import React from 'react';
import { observer, inject} from 'mobx-react';
import test from '../../../util/hpHeroes.js';
import styled from 'styled-components';

const HpHeroWrapper = styled.div`
    flex-grow: 1;
    flex-basis: 23%;
    max-width: 23%;
    margin: 0 1%;
    img {
        width: 100%;
    }
`;

let HpHero: any = () => {
    return (
        test.map(
            (e: string[]) => {
                const searchName = e[0];
                const displayName = e[1];
                const image = e[2];
                
                return(
                    <HpHeroWrapper>
                        <img src={image} alt='' />
                    </HpHeroWrapper>
                )
            }
        )
    )
};

export default observer(HpHero);