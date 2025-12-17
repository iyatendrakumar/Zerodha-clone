import React from 'react'
function PricingCard({ image, title, description}) {
    return ( 
        <div className="col-lg-4 col-md-6 col-12 text-center px-lg-4 px-2 py-3">
            <img 
                src={image} 
                alt={title}
                className="mb-4"
                style={{width:"60%"}}
                />
                <h4 className=" mb-3" style={{
    fontSize: "1.9rem",
  }}>{title}</h4>
                <p className="text-muted">{description}</p>
        </div>
     );
}

export default PricingCard;