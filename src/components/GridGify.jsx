import React, { useEffect } from 'react';


export const GridGify = (props) =>{
    const {category} = props;
    const API_KEY = 'SdTFzrKBbrWGUBXN80eSGSew1Y0q10fZ';
    

    /*
            Second arg [] is a dependencies list, if it is empty, it is only
            will be executed when component get mounted, at first (one time)
    */
    useEffect(()=>{
        getGifs();
    }, []); 
    
    // http request
    const getGifs = async () =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${API_KEY}`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title : img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
    }

    return(
        <div>
            <h6>{category}</h6>
        </div>
    );
};