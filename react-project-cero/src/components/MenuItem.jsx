import React from "react";

export const MenuItem = (props )=>{
    const {title, img, desc} = props;
    return(
        <div className="menu-item">
            <img src={img} alt="Image menu"></img>
            <h2 className="menu-title">{title}</h2>         
            <p className="desc-item">{desc}</p>
        </div>
    );
}