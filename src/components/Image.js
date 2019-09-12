import React from 'react';
import styled from 'styled-components';


const ImageTitleStyled = styled.h2`
    font-size: 2rem;
    letter-spacing: 0.6rem;
`

const Image = props => {
    
    return (
        <div>
            <ImageTitleStyled>{props.title.toUpperCase()}</ImageTitleStyled>
            <p>{props.date}</p>
            <img src={props.url} alt={props.title}></img>
            <p>{props.explanation}</p>
        </div>
    )
}




export default Image;