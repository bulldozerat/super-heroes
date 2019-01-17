import React from "react";

interface TitleProps {
    position: any,
    text: string,
}

let Title = (props: TitleProps) => {
    return (
        <h1 style={{textAlign: props.position}}>{props.text}</h1>
    )
}

export default Title;