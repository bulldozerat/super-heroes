import React from "react";

let Title = (props:any) => {
    return (
        <h1 style={{textAlign: props.position}}>{props.text}</h1>
    )
}

export default Title;