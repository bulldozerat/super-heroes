import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

interface ButtonProps {
    background: string,
    width: string,
    color: string,
    text: string,
    heroId: object
}

let Button = (props: ButtonProps) => {
    const StyledButton = styled.div`
        background: ${props.background || "#0f4191"} ;
        width: ${props.width || "100%"};
        color: ${props.color || "#fff"};
        height: 40px;
        line-height: 38px;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
    `;

    return (
        <StyledButton>{props.text || "Pass text prop"}</StyledButton>
    )
}

export default observer(Button);
