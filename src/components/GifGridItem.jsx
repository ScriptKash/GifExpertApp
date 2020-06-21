import React, { useState } from 'react';

const GifGridItem = ({id, title, url}) => {

    const color = "#"+((1<<24)*Math.random()|0).toString(16);
    return ( 
        <div style={{backgroundColor: color}} className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
        </div>
     );
}
 
export default GifGridItem;