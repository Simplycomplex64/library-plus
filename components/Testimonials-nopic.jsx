import React from "react";

export default function TestimonialsNopic({ children, img, alt, name, location }) {
    if (children) {
        return (
            <>
                <div className="main-testimonial-container-nopic">
                    <div className="testimonials-nopic">
                        <img className="testinopic" src={img} alt={alt} />
                        <p className="testimonials-text-nopic">{children}</p>
                        <div className="signature-nopic">
                            <h4>{name} <span>/</span><span> {location}</span></h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}