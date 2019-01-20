import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 20px 0;
    input {
        width: 50%;
        height: 40px;
        font-size: 20px;
        font-weight: bold;
        padding-left: 10px;
        border: 4px solid #465469;
        color: #465469;
        background: #f4f6f9;
    }
    input::placeholder {
        color: #465469;
    }
`;

let Search = inject("displayStore")(observer((props: any) => {
    return(
        <SearchWrapper>
            <input type="text" placeholder="Seach for heroes" onChange={props.displayStore.searchHeroes}/>
        </SearchWrapper>
    )
}));

export default Search;