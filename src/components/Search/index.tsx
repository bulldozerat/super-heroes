import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Hero from '../Hero';
import HeroBadges from '../HeroBadges';

const SearchWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 50px 0 20px;
    background: #f4f6f9;
    input {
        width: 50%;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        padding-left: 10px;
        border: 4px solid #465469;
        color: #465469;
        background: #fff;
    }
    input::placeholder {
        color: #465469;
    }
`;

interface SearchProps {
    displayStore?: any
}

let Search = inject("displayStore")(observer((props: SearchProps) => {
    return(
        <>
            <SearchWrapper>
                <input type="text" placeholder="Seach for heroes" onChange={props.displayStore.searchHeroes}/>
            </SearchWrapper>
            <Hero />
            <HeroBadges />
        </>
    )
}));

export default Search;