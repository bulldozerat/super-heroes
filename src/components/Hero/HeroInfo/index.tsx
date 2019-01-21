import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import SectionInfo from './SectionInfo';

const InfoWrapper = styled.div`
    display: none;
    box-sizing: border-box;
    width:100%;
    background: #F4F6F8;
    padding: 1px 30px 50px 30px;
    .info-display {
        display: none;
    }
    h1{
        margin: 5px 0 5px 0;
    }
    .info-property {
        font-weight: bold;
        text-transform: capitalize;
    }
`;

interface HeroInfoProps {
    order: number,
    info: {
        appearance: object,
        biography: object,
        connections: object,
        work: object,
    }
}

let HeroInfo = (props: HeroInfoProps) => {
    return (
        <InfoWrapper className={'InfoWrapper InfoWrapper' + props.order}>
            <SectionInfo info={props.info.appearance} title="Appearance" margin="0" />
            <SectionInfo info={props.info.biography} title="Biography" margin="0" />
            <SectionInfo info={props.info.connections} title="Connections" margin="0" />
            <SectionInfo info={props.info.work} title="Work" />
        </InfoWrapper>
    )
};

export default observer(HeroInfo);