import React from 'react';
import { observer, inject } from 'mobx-react';

let Connections = inject("heroInfoStore")(observer((props) => {
    return (
        <h1>Connections</h1>
    )
}));

export default Connections;