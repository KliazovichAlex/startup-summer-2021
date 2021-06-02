import React from 'react';
import './style.css'

function ReposItem(props) {
    
  return(
    <div className="item_container" >
        <div className="item">
            <p className="item_name">{props.repository.name}</p>
            <p className="item_description">{props.repository.description}</p>
        </div>
    </div>
  )  
}

export default ReposItem;