import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';
import HpHero from './HpHero';

const HomePageWrapper = styled.div`
    box-sizing: border-box;
    padding: 30px;
    background: #f4f6f9;
    width: 100%;
`;

let HomePage = (props: any) => {
    return (
        <HomePageWrapper>
            <Title position="center" text="Home Page"/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <HpHero />
            </div>
        </HomePageWrapper>
    )
}

export default HomePage;