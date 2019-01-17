import React from "react";
import { inject, observer } from 'mobx-react';
import HeroImage from '../HeroImage';
import styled from 'styled-components';
import Title from '../common/Title';
import HeroStats from '../HeroStats';

const HeroWrapper = styled.div`
    display: flex;
    background: #f4f6f9;
    margin-bottom: 30px;
    padding: 20px;
    img {
        width: 350px;
        max-height: 465px;
    }
`;

let Hero = inject("heroStore")(observer((props) => {
    return (
        <>
            {props.heroStore.heroTypes.map(
                (e: any) => {
                    return (
                        <div key={e.id}>
                            <Title text={e.name} position="center"/>
                            <HeroWrapper>
                                <HeroImage image={e.image.url}/>
                                <HeroStats powerstats={e.powerstats}/>
                            </HeroWrapper>
                        </div>
                    )
                }
            )}
        </>
    )
}));

export default Hero;