import React from "react";
import classnames from "classnames";

export default function Banners({children, img, alt, variant}) {
    let variantClass = variant && `${variant}`
    const allClasses = classnames("main",variantClass)

    return (
        <>
        <div className="main-container">
            <div className={allClasses}>
                <div className="img-container">
                    <img src={img} alt={alt} />
                </div>
                <div className="banner-details">
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}

