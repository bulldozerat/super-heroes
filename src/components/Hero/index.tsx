import React from "react";
import { inject, observer } from 'mobx-react';
import HeroImage from './HeroImage';
import styled from 'styled-components';
import Title from '../common/Title';
import HeroStatsBar from './HeroStatsBar';
import Button from './Button';
import HeroInfo from './HeroInfo';

const HeroWrapper = styled.div`
    display: flex;
    background: #f4f6f9;
    padding: 30px;
    img {
        width: 350px;
        max-height: 465px;
    }
`;

const StatsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-left: 20px;
`;

interface HeroProps {
    heroStore?: any
}

let Hero = inject("heroStore")(observer((props: HeroProps) => {
    return (
        <>
            {props.heroStore.heroTypes.map(
                (e: any, index: number) => {
                    return (
                        <div key={e.id}>
                            <Title text={e.name} position="center"/>
                            <HeroWrapper>
                                <HeroImage image={e.image.url}/>
                                <StatsWrapper>
                                {
                                    Object.keys(e.powerstats).map(function(key) {
                                        return (
                                            <HeroStatsBar nameOfPowerStat={key} value={e.powerstats[key]} key={Math.random()}/>
                                        )
                                    })
                                }
                                <Button background="#0f4191" color="#fff" width="400px" heroClass={'InfoWrapper' + (index + 1)}/>
                                </StatsWrapper>
                            </HeroWrapper>
                            <HeroInfo info={e} order={index + 1}/>
                        </div>
                    )
                }
            )}
        </>
    )
}));

export default Hero;