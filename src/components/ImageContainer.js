import React, {useState, useEffect} from 'react';
import Axios from 'axios';



function ImageContainer() {

//set state
const [image, setImage] = useState({})

//add effect hook to get the data from api

useEffect(() => {
    Axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
        console.log(response)
        const imgData = response.data;
        setImage(imgData)
    })
    .catch(error => {
        console.log('returning an error: ', error)
    })
}, [])


return (
    <Image />
)



}












export default ImageContainer;