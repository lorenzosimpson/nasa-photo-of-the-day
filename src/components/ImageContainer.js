import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Image from './Image';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

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
    <div>
    {
        !image.url ? (
            <div className="loader">
                <h3>Loading...</h3>
                <Loader type="TailSpin" color="black" height={80} width={80} />
            </div>
        ) : (
            <Image url={image.url} title={image.title} explanation={image.explanation} date={image.date}/>
        )
    }
    </div>
)
}


export default ImageContainer;