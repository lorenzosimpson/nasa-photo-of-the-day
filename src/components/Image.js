import React, {useState, useEffect} from 'react';
import Axios from 'axios';



function Image() {

//set state
const [image, setImage] = useState([])

//add effect hook to get the data from api

useEffect(() => {
    Axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
        console.log(response)
        const imgData = response.data;
    })
    .catch(error => {
        console.log('returning an error: ', error)
    })
}, [])


return (
    <div>hello</div>
)



}












export default Image;