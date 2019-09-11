import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Image from './Image';

//API KEY: 9cllbbR77tFXH1mBYxWFwgcPm95KCBdh6ju5OMbM 




function ImageContainer() {

//set state
const [image, setImage] = useState({})



//add effect hook to get the data from api

useEffect(() => {
    Axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=9cllbbR77tFXH1mBYxWFwgcPm95KCBdh6ju5OMbM`)
    .then(response => {
        const data = response.data;
        setImage(data)
    })
    .catch(error => {
        console.log('returning an error: ', error)
    })
}, [])


return (
    <Image url={image.url} title={image.title} explanation={image.explanation} date={image.date}/>
)
}


export default ImageContainer;