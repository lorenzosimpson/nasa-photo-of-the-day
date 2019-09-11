import React from 'react';

const Image = props => {
    return (
        <div>
            <img src={props.url} alt={props.title}></img>
            <p>{props.date}</p>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}




export default Image;