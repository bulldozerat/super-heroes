import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import listCharacters from '../../util/listCharacters';

const HeroBadges = inject("heroStore" , "displayStore")(observer((props: any) => {
    const BadgesWrapper = styled.div`
        display: flex;
        box-sizing: border-box;
        width: 100%;
        flex-wrap: wrap;
        padding-top: 30px;
        background: #f4f6f9;
        .badge {
            flex-grow: 1;
            width: 16%;
            max-width: 226px;
            margin: 2%;
            background: #517abc;
            padding: 7px;
            color: #fff;
            text-align: center;
            text-overflow: ellipsis;
            border-radius: 25px;
            white-space: nowrap;
            cursor: pointer;
        }
    `;
    
    let utilHeroArr = listCharacters.split(",");
    let heroesArray = props.displayStore.heroesArray || utilHeroArr;

    return (
        <BadgesWrapper>
            {heroesArray.map(
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
        </BadgesWrapper>
    )
}));

export default HeroBadges;