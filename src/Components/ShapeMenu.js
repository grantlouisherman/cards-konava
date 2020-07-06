import React from 'react';


const ShapeMenu = ({ onClick }) => {
  return(
    <div onClick={(e) => onClick(e, e.target.id)}>
    <p id="text"> Text </p>
    <p id="img"> Image </p>
    </div>
  )
}

export default ShapeMenu;
