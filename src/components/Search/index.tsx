import React from "react";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

let Search = inject("displayStore")(observer((props: any) => {
    const SearchWrapper = styled.div`
    display: ${props.displayStore.searchPage};
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

    return(
        <SearchWrapper>
            <input type="text" placeholder="Seach for heroes" onChange={props.displayStore.searchHeroes}/>
        </SearchWrapper>
    )
}));

export default Search;