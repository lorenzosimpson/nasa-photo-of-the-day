import React from 'react';

const Image = props => {
    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.url} alt={props.title}></img>
            <p>{props.explanation}</p>
        </div>
    )
}




export default Image;