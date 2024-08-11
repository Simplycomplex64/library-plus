import React from "react";
import classnames from "classnames";

export default function Cards({children, img, alt, variant}){
    let variantClass = variant && `${variant}`
    const allClasses = classnames("image-container",variantClass)   

    return(
        <>
            <div className="card-container">
                <div className={allClasses}>
                    <img className="image" src={img} alt={alt} />
                </div>
                <div className="card-details">
                    {children}
                </div>
            </div>
        </>
    )
}