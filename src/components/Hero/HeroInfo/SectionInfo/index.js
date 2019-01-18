import React from 'react';
import { observer } from 'mobx-react';
import Title from '../../../common/Title';

let SectionInfo = (props) => {
    return (
        <>
        <Title position="left" text={props.title}/>
        {
            Object.keys(props.info).map(function (key) {
                return (
                    <div key={Math.random()}><span className="info-property">{key}</span>: {props.info[key]}</div>
                )
            })
        }
        </>
    )
};

export default observer(SectionInfo);