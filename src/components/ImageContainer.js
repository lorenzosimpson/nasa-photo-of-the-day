import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Image from './Image';



function ImageContainer() {

//set state
const [image, setImage] = useState({})

//add effect hook to get the data from api

useEffect(() => {
    Axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
        const data = response.data;
        console.log(data)
        setImage(data)
    })
    .catch(error => {
        console.log('returning an error: ', error)
    })
}, [])


return (
    <Image url={image.url} title={image.title}/>
)

}






export default ImageContainer;