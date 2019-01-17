import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

let getColor: any = (namePower: string) => {
    if(namePower === "intelligence"){
        return "#3874d8";
    }else if(namePower === "strength"){
        return "#bc2d3e";
    }else if(namePower === "speed"){
        return "green";
    }else if(namePower === "durability"){
        return "#8c4d09";
    }else if(namePower === "power"){
        return "#ea3349";
    }else if(namePower === "combat"){
        return "orange";
    }
    return "gray";
};

let HeroStats = inject("heroStore")(observer((props) => {
    let color = getColor(props.nameOfPowerStat);

    const HeroWrapper = styled.div`
        display: block;
        width: ${props.value}%;
        height: 40px;
        line-height: 38px;
        background: ${color};
        padding-left: 20px;
        border-radius: 25px;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
    `;

    return (
        <HeroWrapper>{props.nameOfPowerStat}: {props.value}</HeroWrapper>
    )
}));

export default HeroStats;