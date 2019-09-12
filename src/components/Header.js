import React from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    color: #2e2e2e;
    font-family: 'Open Sans', sans-serif;
    font-size: 4rem;
    letter-spacing: 2rem;
`


function Header() {
    return (
        <div className="header-container">
            <Title>NASA APOD</Title>
        </div>
    )
}










export default Header;