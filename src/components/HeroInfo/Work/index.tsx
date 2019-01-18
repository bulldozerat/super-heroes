import React from 'react';
import { observer, inject } from 'mobx-react';

let Work = inject("heroInfoStore")(observer((props) => {
    return (
        <h1>Work</h1>
    )
}));

export default Work;