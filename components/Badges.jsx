import React from "react";
import classnames from "classnames";

export default function Badges({ children, className, size, variant, shape, onClick }) {
  let sizeClass = size ? `button-${size}` : "";
  let variantClass = variant ? `button-${variant}` : "";
  const allClasses = classnames(sizeClass, variantClass, className);

  // Modify onClick to pass the variant and shape information
  const handleClick = () => {
    if (onClick) {
      onClick({ shape, variant });
    }
  };

  return (
    <button onClick={handleClick} className={allClasses}>
      {children}
    </button>
  );
}
