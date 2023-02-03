import './directory.style.scss';
import CategoryItmComponent from '../category-item/category-itm.component';

import React from 'react'

const Directory = ({objectArray}) => {
  return (
    <div className="categories-container">
      {
        objectArray.map((item) => {
          return (
            <CategoryItmComponent key={item.id} item={item} />
          )
        })
      }


    </div>
  )
}

export default Directory


