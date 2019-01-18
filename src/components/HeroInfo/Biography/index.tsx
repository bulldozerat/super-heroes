import React from 'react';
import { observer, inject } from 'mobx-react';

let Biography = inject("heroInfoStore")(observer((props) => {
    return (
        <h1>Biography</h1>
    )
}));

export default Biography;