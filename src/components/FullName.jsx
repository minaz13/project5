import React from "react";

export const FullName=({fname,lname,empid,depart})=>{
    return(
        <div className="sub">
         <h3>
            {`${fname} ${lname}` }
         </h3>
         <h4>{empid}</h4>
         <h4>{depart}</h4>

        </div>
    )
}