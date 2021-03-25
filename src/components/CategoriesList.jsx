import React from 'react'

function CategoriesList(props, children) {
  return (
    <div>
      <ul>
        {
          props.categories.map((elm, index)=>(
            <li key={index}>
              {elm}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoriesList