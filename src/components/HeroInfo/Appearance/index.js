import React from 'react';
import { observer } from 'mobx-react';

let Appearance = (props) => {
    return (
        Object.keys(props.info.appearance).map(function (key) {
            return (
                <div key={Math.random()}>{key}: {props.info.appearance[key]}</div>
            )
        })
    )
};

export default observer(Appearance);