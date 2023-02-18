import './directory.style.scss';
import DirectoryItemComponent from '../directory-item/directory-itm.component';

import React from 'react'

const Directory = ({objectArray}) => {
  return (
    <div className="categories-container">
      {
        objectArray.map((item) => {
          return (
            <DirectoryItemComponent key={item.id} item={item} />
          )
        })
      }


    </div>
  )
}

export default Directory


