import React from "react";
import { inject, observer } from 'mobx-react';

let HeroStats = inject("heroStore")(observer((props) => {
    console.log(props.powerstats);
    
    return (
        <div>stats</div>
    )
}));

export default HeroStats;