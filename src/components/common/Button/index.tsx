import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

interface ButtonProps {
    background: string,
    width: string,
    color: string,
    heroClass: string,
    heroStore?: any
}

let Button = inject("heroStore")(observer((props: ButtonProps) => {
    const StyledButton = styled.div`
        background: ${props.background || "#0f4191"} ;
        width: ${props.width || "100%"};
        color: ${props.color || "#fff"};
        height: 40px;
        line-height: 38px;
        text-align: center;
        font-weight: bold;
        border-radius: 10px;
        text-transform: uppercase;
        cursor: pointer;
    `;

    return (
        <StyledButton data-hero-class={props.heroClass} onClick={props.heroStore.visibilityInfoSection}>{props.heroStore.characterBtnText}</StyledButton>
    )
}));



export default Button;
