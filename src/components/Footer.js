import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
    letter-spacing: 2px;
`
const LinkStyled = styled.a`
    text-decoration: none;
`
const FooterTextStyled = styled.p`
    margin: 0;
    padding: 20px;
`


function Footer() {
    return (
        <FooterStyled>
            <FooterTextStyled>Created by <LinkStyled href="https://lorenzosimpson.github.io/portfolio-website/" target="blank">Lorenzo Simpson</LinkStyled></FooterTextStyled>
        </FooterStyled>
    )
}

export default Footer;