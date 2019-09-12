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
    box-shadow: 0px 0px 20px black;
    transition: 0.5s ease-in;
    &:hover {
        transform: scale(1.05)
    }
`
const ParagraphStyled = styled.p`
    width: 60%;
    font-size: 1.3rem;
`

const Image = props => {
    
    return (
        <ImageBlock>
            <a href={props.hdUrl} target="_blank"><ImageStyled src={props.url} alt={props.title}></ImageStyled></a>
            <ImageTitleStyled>{props.title.toUpperCase()}</ImageTitleStyled>
            <p>{props.date}</p>
            <ParagraphStyled>{props.explanation}</ParagraphStyled>
        </ImageBlock>
    )
}




export default Image;