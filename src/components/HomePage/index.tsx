import React from 'react';
import styled from 'styled-components';
import HpHero from './HpHero';
import { inject, observer } from 'mobx-react';



let HomePage = inject("displayStore")(observer((props: any) => {
    const HomePageWrapper = styled.div`
        display: ${props.displayStore.homePage};
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 30px;
        background: #f4f6f9;
        width: 100%;
    `;

    return (
        <HomePageWrapper>
            <HpHero />
        </HomePageWrapper>
    )
}));

export default HomePage;