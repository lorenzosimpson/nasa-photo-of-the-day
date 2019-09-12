import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    color: #2e2e2e;
    font-size: 4rem;
    letter-spacing: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid black;
    
`


function Header() {
    return (
        <div className="header-container">
            <Title>NASA APOD</Title>
        </div>
    )
}










export default Header;