import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGify } from "./components/GridGify";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([    
    "Deadpool",
  ]);


  return (
    <div className="conatiner">
      <div className="row m-2">
        <div className="col-md-12">
          <h2>Gif Expert</h2>
          <AddCategory setCategories={setCategories}/>
          <hr />          
          <ol>
            {categories.map((item, i) => 
                (<GridGify key={i} category={item}/>)
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};
