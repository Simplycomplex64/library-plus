import React from "react";

export default function Banner({children}){
    

    return(
        <div className="banner">
              <Banners variant="green">
                {children}
              </Banners>
            </div>
    )
}