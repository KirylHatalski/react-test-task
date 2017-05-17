import React from 'react';

import { togglePopup } from '../utils';

const AddImage = (props) => (
  <div className='add-image' onClick={togglePopup}>
    <i className='add-image-plus'>
      &#9547;
    </i>
    <form className='add-image-popup' onSubmit={(form) => {
      form.preventDefault();
      props.addImage(form.target.imageUrl.value);
    }}>
      <div className='add-image-popup-up'>
        <i className='add-image-popup-close' onClick={togglePopup}>+</i>
      </div>
      <input type='text' name='imageUrl' className='add-image-input' placeholder='type new picture url here' onClick={(el) => el.stopPropagation()}/>
      <button className='add-image-submit' type='submit' onClick={togglePopup}>Add</button>
    </form>
  </div>
);

export default AddImage;
