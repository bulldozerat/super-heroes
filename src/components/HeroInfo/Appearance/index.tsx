import React from 'react';
import { observer, inject } from 'mobx-react';

let Appearance = inject("heroInfoStore")(observer((props) => {
    return (
        <h1>Appearance</h1>
    )
}));

export default Appearance;