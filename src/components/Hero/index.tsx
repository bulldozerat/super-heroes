import React from "react";
import { inject, observer } from 'mobx-react';
import HeroImage from '../HeroImage';
import styled from 'styled-components';
import Title from '../common/Title';
import HeroStats from '../HeroStats';
import Button from '../common/Button';

const HeroWrapper = styled.div`
    display: flex;
    background: #f4f6f9;
    margin-bottom: 30px;
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
                                <StatsWrapper>
                                {
                                    Object.keys(e.powerstats).map(function(key) {
                                        return (
                                            <HeroStats nameOfPowerStat={key} value={e.powerstats[key]} key={Math.random()}/>
                                        )
                                    })
                                }
                                <Button text="See more" background="#0f4191" color="#fff" width="200px" heroId={e.id}/>
                                </StatsWrapper>
                            </HeroWrapper>
                        </div>
                    )
                }
            )}
        </>
    )
}));

export default Hero;