import React from 'react';
import styled from 'styled-components';

const ImageBlock = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
const ImageTitleStyled = styled.h2`
    font-size: 2rem;
    letter-spacing: 0.6rem;
`
const ImageStyled = styled.img`
    max-width: 1000px;
`
const ParagraphStyled = styled.p`
    width: 60%;
`

const Image = props => {
    
    return (
        <ImageBlock>
            <ImageStyled src={props.url} alt={props.title}></ImageStyled>
            <ImageTitleStyled>{props.title.toUpperCase()}</ImageTitleStyled>
            <p>{props.date}</p>
            <ParagraphStyled>{props.explanation}</ParagraphStyled>
        </ImageBlock>
    )
}




export default Image;