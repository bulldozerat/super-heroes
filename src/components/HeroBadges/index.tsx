import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import listCharacters from '../../util/listCharacters';



let HeroBadges = inject("heroStore")(observer((props: any) => {
    const BadgesWrapper = styled.div`
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .badge {
            flex-grow: 1;
            width: 16%;
            margin: 2%;
            background: skyblue;
            padding: 7px;
            color: #fff;
            text-align: center;
            text-overflow: ellipsis;
            border-radius: 25px;
            white-space: nowrap;
            cursor: pointer;
        }
    `;
    
    return (
        <BadgesWrapper>
            {listCharacters.split(",").map(
                (e: any, index: number) => {
                    return(
                        <div 
                            className="badge" 
                            key={index} 
                            data-name={e} 
                            onClick={props.heroStore.fetchHero}
                        >
                        {e}
                        </div>
                    )
                }
            )}
            {/* <div className="badge">Test</div> */}
        </BadgesWrapper>
    )
}));

export default HeroBadges;