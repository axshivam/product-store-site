import React from "react";

const AppSection = ({data}) => {
    return (
       <div class="row">
         <div class="col-4">
           <img src={`images/${data.image}`} alt=""/>
           <h4>{data.Product_name}</h4>
           <div class="rating">
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star-o" aria-hidden="true"></i>
           </div>
           <p>${data.Price}</p>
         </div>
       </div>
    );
};

export default AppSection;