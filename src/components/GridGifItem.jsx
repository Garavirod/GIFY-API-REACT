import React from "react";

export const GridGifItem = (props) =>{
    const {id, title, url} = props;
    return(
        <div className="card col-lg-2 m-1">
             <img src={url} className="card-img-top" alt={title}></img>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-12 mb-2"><span>{id}</span></div>
                    <div className="col-lg-12">
                        <p className="card-text">{title}</p>
                    </div>                                
                </div>
            </div>
        </div>
    );
};