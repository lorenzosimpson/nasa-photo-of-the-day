import React from 'react';

const Image = props => {
    return (
        <div>
            <img src={props.url} alt={props.title}></img>
            <h2>{props.title}</h2>
            <h4>{props.copyright}</h4>
        </div>
    )
}




export default Image;