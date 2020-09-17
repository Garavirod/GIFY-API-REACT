import React from "react";
import { GridGifItem } from "./GridGifItem";
import { useGetGifs } from "../hooks/useGetGifs";
import { Loading } from "./Loading";

export const GridGify = (props) => {
  const { category } = props;
  const {data:images, loading} = useGetGifs(category);
 
  return (
    <div>
      <div className="alert alert-success" role="alert">        
        <h6>{category}</h6>        
      </div>
      {
          (loading) && <Loading/>
      }
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
