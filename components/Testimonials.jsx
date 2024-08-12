import React from "react";

export default function Testimonials({ children, img, alt, testiIcon, testiAlt, testiText, testiName, testiLocation }) {

    if (img) {
        return (
            <>
                <div className="main-testimonial-container">
                    <div className="testimonials">
                        <img className="my-image" src={img} alt={alt} />
                        <img className="TI" src={testiIcon} alt={testiAlt} />
                        <p className="testimonials-text">{testiText}</p>
                        <div className="signature">
                            <h4>{testiName}</h4>
                            <p>{testiLocation}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (children) {
        return (
            <>
                {children}
            </>
        )
    }
}