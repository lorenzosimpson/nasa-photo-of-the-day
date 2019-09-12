import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
    letter-spacing: 2px;
`
const LinkStyled = styled.a`
    text-decoration: none;
`


function Footer() {
    return (
        <FooterStyled>
            <p>Created by <LinkStyled href="https://lorenzosimpson.github.io/portfolio-website/">Lorenzo Simpson</LinkStyled></p>
        </FooterStyled>
    )
}

export default Footer;