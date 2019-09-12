import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`

`
const Title = styled.h1`
    color: #2e2e2e;
    font-size: 4rem;
    letter-spacing: 2rem;
    margin: 0;
    padding: 2rem;
    border-bottom: 1px solid black;
    
`


function Header() {
    return (
        <HeaderStyled className="header-container">
            <Title>NASA APoD</Title>
        </HeaderStyled>
    )
}










export default Header;