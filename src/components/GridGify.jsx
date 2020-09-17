import React, { useEffect, useState } from "react";
import { GridGifItem } from "./GridGifItem";
import { getGifs } from "../helpers/GetGif";

export const GridGify = (props) => {
  const { category } = props;
  const [images, setImages] = useState([]);

  /*
    Second arg [] is a dependencies list, if it is empty, it is only
    will be executed when component get mounted, at first (one time)
    */
  useEffect(() => {
    getGifs(category)
    .then(images =>{
        setImages(images);
    })
    .catch(err=>{
        console.log(err);
    });
  }, [category]);
 
  return (
    <div>
      <div className="alert alert-success" role="alert">        
        <h6>{category}</h6>        
      </div>
      <div className="container fluid">
        <div className="row text-justify-content">
          {images.map((img) => (
            <GridGifItem key={img.id} {...img} />
          ))}
        </div>
      </div>
    </div>
  );
};
