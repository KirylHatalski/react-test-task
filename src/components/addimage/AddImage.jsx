import React from 'react';
// import ReactDOM from 'react-dom';
 // props.addImage
const AddImage = (props) => (
  <div className='add-image'>
    <i className='add-image-plus'>
      &#9547;
    </i>
    <input type='file' className='add-image-input'/>
  </div>
);

export default AddImage;
