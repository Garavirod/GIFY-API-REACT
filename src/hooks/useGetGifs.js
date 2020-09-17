import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGif";

export const useGetGifs = (category) =>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });

      /*
    Second arg [] is a dependencies list, if it is empty, it is only
    will be executed when component get mounted, at first (one time)
    */
    useEffect(()=>{
        getGifs(category)
        .then(images=>{
            setTimeout(()=>{
                setState(
                    {
                        data:images,
                        loading:false
                    }
                )
            },2000)
        })
        .catch(err=>{
            console.log(err);
        })
    },[category]);

    return state;

};